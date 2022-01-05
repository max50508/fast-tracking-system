const serviceAccount = require("../config/fbSA.js");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const firebaseStoreDB = admin.firestore();
const residentRef = firebaseStoreDB.collection("residents");

module.exports = firebaseStoreDB;
module.exports = residentRef;
