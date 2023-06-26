import { createContext, useContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import axios from "axios";

import { auth } from "../views/Login/Auth/FireBase";
import PropTypes from "prop-types";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no auth provider");
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singup = async (email, password) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = credential.user.email;
    sendUserDataToBackend({ email: userEmail, uid: credential.user.uid, photoURL: credential.user.photoURL });
    return credential;
  };

  const login = async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    sendUserDataToBackend({ email: credential.user.email });
  };

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };

  const registerWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
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

  const sendUserDataToBackend = (userData) => {
    if (userData) {
      axios
        .post("http://localhost:3001/api/users", {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          uid: userData.uid,
          photoURL: userData.photoURL
        })
        .then(() => {
          console.log("User data sent to Backend");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
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
        resetPassword,
        registerWithGoogle,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
