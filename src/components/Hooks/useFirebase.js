import React from 'react';
import initilizeAuthentication from "../Login/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut ,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";

initilizeAuthentication();

const UseFirebase =()=>{

    const[user,setUser]=useState({});
const auth = getAuth();
const googleProvider=new GoogleAuthProvider();

const siginWithGoogle=()=>{

    return signInWithPopup(auth,googleProvider)
}

useEffect(()=>{
const unsubscribed=onAuthStateChanged(auth,user=>{

    if(user){
        setUser(user);
    }
    else{
        setUser({})
    }


});
return ()=>unsubscribed;


},[])

const logOut=()=>{
    signOut(auth)
    .then(()=>{});
}
return {
    user,
    setUser,
    logOut,
    siginWithGoogle


}


}
export default UseFirebase;