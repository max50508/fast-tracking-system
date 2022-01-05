const serviceAccount = require("../config/fbSA.js");
const admin = require("../firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firebaseStoreDB = admin.firestore();

module.exports = firebaseStoreDB;
