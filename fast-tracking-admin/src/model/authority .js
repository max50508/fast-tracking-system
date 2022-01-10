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
//     displayName:"子近",
//     isPass:"未審核",
//     mail:"",
//     name:"",
//     pictureUrl:"1231",
//     userId:"12313",
// }
// setPerson(data).then((res)=>{  //傳入一個物件 如:data
//     console.log("有人進入",res)
// })

// passPerson(4).then((res)=>{   //傳入一個authorityId
//     console.log("通過",res)
// })

// nopassPerson(3).then((res)=>{    ////傳入一個authorityId
// console.log("未審核把他刪除了!",res)
//     })


// getNoCheckList().then((res)=>{   
//     console.log("未審核名單",res)
// })

// getPassList().then((res)=>{
//     console.log("通過審核名單",res)
// })

// var data2 = {
//     authorityId:1,
//     name:"邱冠哲",
//     mail:"a0966@",
//     authority:"管理員",
// }
// updateAuthority(data2).then((res)=>{  ////傳入一個要有authorityId的物件 如:data2 
//     console.log("修改權限",res)
// })

// deleteAuthority(5).then((res)=>{   //傳入一個authorityId
//     console.log("刪除權限",res)
// })