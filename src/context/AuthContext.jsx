import { useContext, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/FirbaseConfig";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signInWithCredentials = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user", currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, signInWithCredentials, signout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
