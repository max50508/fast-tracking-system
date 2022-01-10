import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../util/dbConfig";
import { 
    collection, 
    getFirestore, 
    doc,
    getDocs,
    setDoc,
    getDoc,
    updateDoc,
    deleteDoc, 
} from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);
const dbFirestore = getFirestore(firebaseApp);


export async function getPlaceList() {
    var placelist = [];
    const q = collection(dbFirestore , "places");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        placelist.push(doc.data());
    })
    return placelist;
}

export async function getPlace(id) {
    var place = "";
    const docRef = doc(dbFirestore,"places",id.toString());
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        place=docSnap.data();
    }else{
        console.log("No such document!!");
    }
    return place;
}

export async function updatePlace(data){
    var Status = false;
    const place = await getPlace(data.pId);
    var updateTime = new Date();
    if(place != ""){
        await updateDoc(doc(dbFirestore,"places", data.pId.toString()),{
            pId:data.pId,
            type:data.type,
            name:data.name,
            identifyId:data.identifyId,
            cellphone:data.cellphone,
            address:data.address,
            taxId:data.taxId,
            contactAddress:data.contactAddress,
            telephone:data.telephone,
            carId:data.carId,
            uId:data.uId,
            status:"審核通過",
            update_time:updateTime.toISOString(),
        });
        Status = true;
    }
    return Status;
}

export async function addPlace(data) {
    var addStatus = false;
    var createTime = new Date();
    await setDoc(doc(dbFirestore, "places", data.pId.toString()), {
    pId: data.pId, //document.getElementById("123").text
    type: data.type,
    name: data.name,
    identifyId: data.identifyId,
    cellphone: data.cellphone,
    address: data.address,
    taxId: data.taxId,
    contactAddress: data.contactAddress,
    telephone: data.telephone,
    carId: data.carId,
    uId: data.uId,
    status: "審查通過",
    create_time:createTime.toISOString(),
    });
    addStatus=true;
    return addStatus;
}

export async function deletePlace(id){
    let status= false;
    const place= await getPlace(id);
    if (place.pId != ""){
        deleteDoc(doc(dbFirestore,"places",id.toString()));
        status = true;

    }
    return status
}
