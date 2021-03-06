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
    query,
    where,
} from "firebase/firestore";
// import { async } from "@firebase/util";

const firebaseApp = initializeApp(firebaseConfig);
const dbFirestore = getFirestore(firebaseApp);


export async function addCount(){
    var Status = false;
    const docRef = doc(dbFirestore,"count","authorityCount");
    const docSnap = (await getDoc(docRef)).data();
    let num=(docSnap.count)+1;
    if(num != ""){
        await updateDoc(doc(dbFirestore,"count", "authorityCount"),{
            count:num,
        });    
    }
    
    Status = true;
    return Status;
}

export async function getPerson(Uid) {
    var person = "";
    const docRef = doc(dbFirestore,"authoritys",Uid.toString());
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        person=docSnap.data();
    }else{
        console.log("No such document!!");
    }
    return person;
}


export async function setPerson(obj){
    var Status = false;

    const docRef = doc(dbFirestore,"count","authorityCount");
    const docSnap = (await getDoc(docRef)).data();
    var id = (docSnap.count)+1;

    var createTime = new Date();
    const person = await getPerson(obj.userId);
    if(person == ""){
        await setDoc(doc(dbFirestore,"authoritys", id.toString()),{
            authorityId:id,
            authority:obj.authority,
            displayName:obj.displayName,
            isPass:false,
            mail:obj.mail,
            name:obj.name,
            pictureUrl:obj.pictureUrl,
            userId:obj.userId,
            createTime:createTime.toISOString(),
        });
        Status = true;
        addCount();
    }
    return Status;
}

export async function passPerson(Uid){
    var Status = false
    var passTime = new Date();
    const person = await getPerson(Uid);
    if(person != ""){
        await updateDoc(doc(dbFirestore,"authoritys", Uid.toString()),{
            isPass:true,
            passtime:passTime.toISOString(),
        });
        Status = true;
    }
    return Status
}

export async function nopassPerson(Uid){
    var Status = false
    const person = await getPerson(Uid);
    if(person != ""){
        await deleteDoc(doc(dbFirestore,"authoritys", Uid.toString()));
        Status = true;
    }
    return Status
}

export async function getNoCheckList() {
    var NoCheckList = [];
    const q = query(collection(dbFirestore, "authoritys"), where("isPass", "==", false));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        NoCheckList.push(doc.data());
    })
    return NoCheckList;
}

export async function getPassList() {
    var PassList = [];
    const q = query(collection(dbFirestore, "authoritys"), where("isPass", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
        PassList.push(doc.data());
    })
    return PassList;
}

export async function updateAuthority(obj){
    var Status = false
    var updateTime = new Date();
    const person = await getPerson(obj.authorityId);
    if(person != ""){
        await updateDoc(doc(dbFirestore,"authoritys", (obj.authorityId).toString()),{
            name:obj.name,
            mail:obj.mail,
            authority:obj.authority,
            updateTime:updateTime.toISOString(),
        });
        Status = true;
    }
    return Status
}

export async function deleteAuthority(Uid){
    var Status = false
    const person = await getPerson(Uid);
    if(person != ""){
        await deleteDoc(doc(dbFirestore,"authoritys", Uid.toString()));
        Status = true;
    }
    return Status
}



// import { 
//     setPerson,
//     nopassPerson,
//     passPerson,
//     getNoCheckList,
//     getPassList,
//     updateAuthority,
//     deleteAuthority,
// } from "./model/authority "


// var data={
//     authority:"",
//     displayName:"??????",
//     isPass:"?????????",
//     mail:"",
//     name:"",
//     pictureUrl:"1231",
//     userId:"12313",
// }
// setPerson(data).then((res)=>{  //?????????????????? ???:data
//     console.log("????????????",res)
// })

// passPerson(4).then((res)=>{   //????????????authorityId
//     console.log("??????",res)
// })

// nopassPerson(3).then((res)=>{    ////????????????authorityId
// console.log("????????????????????????!",res)
//     })


// getNoCheckList().then((res)=>{   
//     console.log("???????????????",res)
// })

// getPassList().then((res)=>{
//     console.log("??????????????????",res)
// })

// var data2 = {
//     authorityId:1,
//     name:"?????????",
//     mail:"a0966@",
//     authority:"?????????",
// }
// updateAuthority(data2).then((res)=>{  ////??????????????????authorityId????????? ???:data2 
//     console.log("????????????",res)
// })

// deleteAuthority(5).then((res)=>{   //????????????authorityId
//     console.log("????????????",res)
// })