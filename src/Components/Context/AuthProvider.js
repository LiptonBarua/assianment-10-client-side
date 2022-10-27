import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

const createUser = (email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
}

const signIn =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
};

const providerLogin=(provider)=>{
   return signInWithPopup(auth, provider)
};

const github=(provider)=>{
 return signInWithPopup(auth, provider)
};

const updateUserProfile=(profile)=>{
  return updateProfile(auth.currentUser, profile)
};

const verifyEmail=()=>{
  return sendEmailVerification(auth.currentUser)
}
const logout =()=>{
  return signOut(auth)
};

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
  })
  return ()=>{
    unsubscribe()
  }
})


const authInfo = {user, createUser, signIn, logout, providerLogin, github,updateUserProfile, verifyEmail}
 return (
  <AuthContext.Provider value={authInfo}>
  {children}
</AuthContext.Provider>
 )
};

export default AuthProvider;