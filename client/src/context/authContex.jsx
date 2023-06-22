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
import axios from "axios";

import { auth } from "../views/Login/Auth/FireBase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singup = async (email, password) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", credential.user);
    sendUserDataToBackend(credential.user);
  };

  const login = async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", credential.user);
    sendUserDataToBackend(credential.user);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  const registerWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const registerWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getUserData = () => {
    return user;
  };

  const sendUserDataToBackend = (userData) => {
  const {uid, email, name} = userData;
  const data = {uid, email};
    axios.post("http://localhost:3001/api/users", data)
      .then(response => {
        console.log("User data sent to Backend");
        // El Backend ha procesado los datos del usuario
      })
      .catch(error => {
        console.error("Error sending user data to Backend:", error);
      });
  };

  return (
    <authContext.Provider
      value={{
        singup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        loginWithGitHub,
        resetPassword,
        registerWithGitHub,
        registerWithGoogle,
        getUserData,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
