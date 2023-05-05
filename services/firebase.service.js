const config = require("../config/config");
const firebase = require("firebase/app");
const firebaseauth = require("firebase/auth");
const firebaseAdm = require("firebase-admin");
const dotenv = require("dotenv");
dotenv.config();

const appname = "MLRCC";
firebase.initializeApp(config.firebaseConfig, appname);8
    
const firebaseAdmin = firebaseAdm.initializeApp({
    credential: firebaseAdm.credential.cert(config.firebaseServiceAccount),
    storageBucket: config.firebaseConfig.storageBucket,
  }, appname);

console.log("Firebase Initialized");
// // console.log(firebase.auth());

// const userId = "n6X1CPYmSzc9Q6qcPRBAZkzM6lu2";
// firebaseAdmin.auth().createCustomToken(userId).then((customToken) => {
//     return firebaseAdmin.auth().signInWithCustomToken(customToken);
// }).then((userCredential) => {
//     const idToken = userCredential.idToken;
//     console.log('ID Token:' ,idToken);
// }).catch((error) => {
//     console.log('Error creating custom token:', error);
// });

module.exports = { firebase, firebaseauth, firebaseAdmin };
