const client = require("../config/client");
// const { firestore } = require("../config/firestore");
// const admin = require("firebase-admin"); //arrayUnion 一定要從admin崁入
const handleBeacon = async (event, replyToken) => {
  // const firestoreData = await firestore.collection("Shop").get();
  console.log(event.beacon);
  if (event.beacon.hwid === "01566e5e3a") {
    return await client.replyMessage(replyToken, {
      type: "text", // ①
      text: `你好!\n偵測到beacon id為${event.beacon.hwid} \n 您的UserId為 ${event.source.userId}`,
    });
  }
};
//   firestoreData.forEach(async (doc) => {
//     const user = {
//       userId: event.source.userId,
//       creatTime: event.timestamp,
//     };
//     if (event.beacon.dm === doc.data().beaconId) {
//       console.log(event.beacon.dm);
//       let isExist = await SearchUserData(doc.id, event.source.userId);
//       switch (doc.data().beaconId) {
//         case "31":
//           if (!isExist) {
//             await firestore
//               .collection("Shop")
//               .doc(doc.id)
//               .update({
//                 userList: admin.firestore.FieldValue.arrayUnion(user), //寫入陣列
//               });
//             await updateUserData(event.source.userId, doc.data().beaconId);
//             await client.replyMessage(replyToken, {
//               type: "image",
//               originalContentUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_1.png?alt=media&token=e493d1d6-6179-4375-a96e-010ebca4a2f0",
//               previewImageUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_1.png?alt=media&token=e493d1d6-6179-4375-a96e-010ebca4a2f0",
//             });
//           }
//           break;
//         case "38":
//           if (!isExist) {
//             await firestore
//               .collection("Shop")
//               .doc(doc.id)
//               .update({
//                 userList: admin.firestore.FieldValue.arrayUnion(user), //寫入陣列
//               });
//             await updateUserData(event.source.userId, doc.data().beaconId);
//             await client.replyMessage(replyToken, {
//               type: "flex",
//               altText: "恭喜您解鎖",
//               contents: {
//                 type: "carousel",
//                 contents: [
//                   {
//                     type: "bubble",
//                     hero: {
//                       type: "image",
//                       url: "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_2-1.png?alt=media&token=eb279952-1a62-4837-b5df-6a1da574261a",
//                       align: "center",
//                       size: "full",
//                       aspectRatio: "1:1",
//                       aspectMode: "cover",
//                       position: "relative",
//                     },
//                   },
//                   {
//                     type: "bubble",
//                     hero: {
//                       type: "image",
//                       url: "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_2-2.png?alt=media&token=b4162216-dbca-4342-a2ff-f4c9ded966df",
//                       size: "full",
//                       aspectRatio: "1:1",
//                       aspectMode: "cover",
//                       position: "relative",
//                     },
//                   },
//                 ],
//               },
//             });
//           }
//           break;
//         case "41":
//           if (!isExist) {
//             await firestore
//               .collection("Shop")
//               .doc(doc.id)
//               .update({
//                 userList: admin.firestore.FieldValue.arrayUnion(user), //寫入陣列
//               });
//             await updateUserData(event.source.userId, doc.data().beaconId);
//             await client.replyMessage(replyToken, {
//               type: "image",
//               originalContentUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_3.png?alt=media&token=6d30a07a-daf6-432d-9e11-8c88ce9097c4",
//               previewImageUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_3.png?alt=media&token=6d30a07a-daf6-432d-9e11-8c88ce9097c4",
//             });
//           }
//           break;
//         case "47":
//           if (!isExist) {
//             await firestore
//               .collection("Shop")
//               .doc(doc.id)
//               .update({
//                 userList: admin.firestore.FieldValue.arrayUnion(user), //寫入陣列
//               });
//             await updateUserData(event.source.userId, doc.data().beaconId);
//             await client.replyMessage(replyToken, {
//               type: "image",
//               originalContentUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_4.png?alt=media&token=8e0348c4-0742-4874-b08d-a2307d8fef8d",
//               previewImageUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_4.png?alt=media&token=8e0348c4-0742-4874-b08d-a2307d8fef8d",
//             });
//           }
//           break;
//         case "50":
//           if (!isExist) {
//             await firestore
//               .collection("Shop")
//               .doc(doc.id)
//               .update({
//                 userList: admin.firestore.FieldValue.arrayUnion(user), //寫入陣列
//               });
//             await updateUserData(event.source.userId, doc.data().beaconId);
//             await client.replyMessage(replyToken, {
//               type: "image",
//               originalContentUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_5.png?alt=media&token=f909f020-ef69-4a3a-a93e-c245763614d4",
//               previewImageUrl:
//                 "https://firebasestorage.googleapis.com/v0/b/travel-rego.appspot.com/o/mud_5.png?alt=media&token=f909f020-ef69-4a3a-a93e-c245763614d4",
//             });
//           }
//           break;
//       }
//     }
//   });
// };
// const SearchUserData = async (docId, userId) => {
//   const firestoreData = await firestore
//     .collection("Shop")
//     .doc(`${docId}`)
//     .get();
//   let isExist = false;
//   firestoreData.data().userList.forEach((doc) => {
//     if (userId === doc.userId) {
//       isExist = true;
//     }
//   });
//   return isExist;
// };
// const updateUserData = async (userId, beaconId) => {
//   const firestoreData = await firestore.collection("Users").get();
//   const data = {
//     beaconId: beaconId,
//   };
//   firestoreData.forEach(async (doc) => {
//     if (doc.data().userId == userId) {
//       isExist = true;
//       await firestore
//         .collection("Users")
//         .doc(doc.id)
//         .update({
//           beacon: admin.firestore.FieldValue.arrayUnion(data),
//         });
//     }
//   });
// };
module.exports = handleBeacon;
