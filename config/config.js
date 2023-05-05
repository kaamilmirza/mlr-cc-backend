const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    MONGO_URL,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_DATABASE_URL,
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url,
    B2_APPLICATION_KEY,
    B2_ACCOUNT_ID,
    B2_BUCKET_ID,

} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');
assert(HOST_URL, 'HOT_URL is required');
assert(FIREBASE_API_KEY, 'API_KEY is required');
assert(FIREBASE_AUTH_DOMAIN, 'AUTH_DOMAIN is required');
assert(FIREBASE_DATABASE_URL, 'DATABASE_URL is required');
assert(FIREBASE_PROJECT_ID, 'PROJECT_ID is required');
assert(FIREBASE_APP_ID, 'APP_ID is required');
assert(FIREBASE_STORAGE_BUCKET, 'STORAGE_BUCKET is required');
assert(FIREBASE_MESSAGING_SENDER_ID, 'MESSAGING_SENDER_ID is required');
assert(FIREBASE_APP_ID, 'APP_ID is required');
assert(type, 'type is required');
assert(project_id, 'project_id is required');
assert(private_key_id, 'private_key_id is required');
assert(private_key, 'private_key is required');
assert(client_email, 'client_email is required');
assert(client_id, 'client_id is required');
assert(auth_uri, 'auth_uri is required');
assert(token_uri, 'token_uri is required');
assert(auth_provider_x509_cert_url, 'auth_provider_x509_cert_url is required');
assert(client_x509_cert_url, 'client_x509_cert_url is required');
assert(MONGO_URL, 'mongoURI is required');

module.exports = {
    PORT: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        databaseURL: FIREBASE_DATABASE_URL,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket : FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID,
    },
    firebaseServiceAccount: {
        type: type,
        project_id: project_id,
        private_key_id: private_key_id,
        private_key: private_key,
        client_email: client_email,
        client_id: client_id,
        auth_uri: auth_uri,
        token_uri: token_uri,
        auth_provider_x509_cert_url: auth_provider_x509_cert_url,
        client_x509_cert_url: client_x509_cert_url,
    },
    mongoURI: MONGO_URL,
    blackBlaze: {
        applicationKeyId: B2_ACCOUNT_ID,
        applicationKey: B2_APPLICATION_KEY,
        bucketId: B2_BUCKET_ID,
    },
};