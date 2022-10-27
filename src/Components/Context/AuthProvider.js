import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true);

const createUser = (email, password)=>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn =(email, password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
};

const providerLogin=(provider)=>{
  setLoading(true);
   return signInWithPopup(auth, provider)
};

const github=(provider)=>{
  setLoading(true);
 return signInWithPopup(auth, provider)
};

const updateUserProfile=(profile)=>{
  setLoading(true);
  return updateProfile(auth.currentUser, profile)
};

const verifyEmail=()=>{
  setLoading(true);
  return sendEmailVerification(auth.currentUser)
}
const logout =()=>{
  setLoading(true);
  return signOut(auth)
};

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
    if(currentUser===null || currentUser. emailVerified){
      setUser(currentUser)
     }
    setLoading(false);
  })
  return ()=>{
    unsubscribe()
  }
})


const authInfo = {user, createUser, signIn, logout, providerLogin, github,updateUserProfile, verifyEmail, loading, setLoading}
 return (
  <AuthContext.Provider value={authInfo}>
  {children}
</AuthContext.Provider>
 )
};

export default AuthProvider;