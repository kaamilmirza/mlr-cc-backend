'use strict';
// const process = require('node:process');
const { request } = require('undici');
const { readFile, stat } = require('node:fs/promises');
const { createReadStream } = require('node:fs');
const { createHash } = require('node:crypto');

/**
 * BackBlaze B2 API
 * @example
 * const b2 = new BackBlaze(process.env.B2_BUCKET_ID, process.env.B2_API_URL, process.env.B2_AUTH_TOKEN);
 * b2.uploadFile({ fileName: 'test.js', filePath: './test.js' }).then(console.log).catch(console.error);
 * @see https://www.backblaze.com/b2/docs/b2_upload_file.html
 * @see https://www.backblaze.com/b2/docs/b2_get_upload_url.html
 */
class BackBlaze {
  constructor(bucketId, apiUrl, authToken) {
    this.bucketId = bucketId;
    this.apiUrl = apiUrl;
    this.authToken = authToken;
  }

  /**
   * Uploads a file to the bucket
   * @param {*} req
   */
  async uploadFile(req) {
    const { fileName, filePath } = req;
    const [uploadUrl, file] = await Promise.all([this.getUploadUrl(), readFile(filePath)]);
    /**
     * Request HTTP Message Body Parameters
     * There are no JSON parameters allowed. The file to be uploaded is the message body and is not encoded in any way.
     * It is not URL encoded. It is not MIME encoded.
     */
    const response = await request(uploadUrl.uploadUrl, {
      method: 'POST',
      headers: this.uploadHeaders(fileName, file.length, createHash('sha1').update(file).digest('hex')),
      body: file,
    });
    console.log(response);

    if (response.statusCode !== 200) throw new Error(`Failed to upload file: ${response.statusCode}`);
    const json = await response.body.json();
    return json;
  }

  /**
   * Use this when you have to upload files larger than 500MB
   * This method allows you to upload files in pieces by not loading the entire file into memory.
   * @param {*} req
   */
  async uploadBigFile(req) {
    const { fileName, filePath } = req;
    let fileSize;
    try {
      const stats = await stat(filePath);
      fileSize = stats.size;
    } catch (error) {
      throw new Error(`Failed to get file size: ${error.message}`);
    }
    const uploadUrl = await this.getUploadUrl();

    const fileStream = createReadStream(filePath);
    const hash = createHash('sha1');
    fileStream.on('data', chunk => hash.update(chunk));

    /**
     * Request HTTP Message Body Parameters
     * There are no JSON parameters allowed. The file to be uploaded is the message body and is not encoded in any way.
     * It is not URL encoded. It is not MIME encoded.
     */
    const response = await request(uploadUrl.uploadUrl, {
      method: 'POST',
      headers: this.uploadHeaders(fileName, fileSize, hash.digest('hex')),
      body: fileStream,
    });
    if (response.statusCode !== 200) throw new Error(`Failed to upload file: ${response.statusCode}`);
    const json = await response.body.json();
    return json;
  }

  /**
   * Gets the upload url for the bucket
   * @returns {{bucketId: string, uploadUrl: string, authorizationToken: string, uploadAuthToken: string}}
   */
  async getUploadUrl() {
    const response = await request(`${this.apiUrl}/b2api/v2/b2_get_upload_url`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        bucketId: this.bucketId,
      }),
    });
    if (response.statusCode !== 200) throw new Error(`Failed to get upload url: ${response.statusCode}`);
    const json = await response.body.json();
    return json;
  }

  /**
   * Gets the headers for uploading a file
   * @param {string} fileName
   * @param {number} length
   * @param {string} sha1CheckSum
   * @returns {{Authorization: string, 'X-Bz-File-Name': string, 'Content-Type': string, 'Content-Length': number, 'X-Bz-Content-Sha1': string}}
   */
  uploadHeaders(fileName, length, sha1CheckSum) {
    return {
      Authorization: this.authToken,
      'X-Bz-File-Name': encodeURIComponent(fileName),
      'Content-Type': 'b2/x-auto',
      'Content-Length': length,
      'X-Bz-Content-Sha1': sha1CheckSum,
      // ... for more optional headers refer https://www.backblaze.com/b2/docs/b2_upload_file.html
    };
  }

  /**
   * Gets the headers for fetching upload URL
   */
  get urlHeaders() {
    return {
      Authorization: this.authToken,
    };
  }
}

module.exports = BackBlaze;

// const b2 = new BackBlaze(process.env.B2_BUCKET_ID, process.env.B2_API_URL, process.env.B2_AUTH_TOKEN);
// b2.uploadFile({ fileName: 'test.js', filePath: './test.js' }).then(console.log).catch(console.error);
