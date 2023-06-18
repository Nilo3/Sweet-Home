/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../views/Login/Auth/FireBase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There ir not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSuscribe(auth);
  }, []);

  return (
    <authContext.Provider
      value={{singup,login,user,logout,loading,loginWithGoogle,loginWithGitHub,resetPassword}}>{children}</authContext.Provider>
  );
}
