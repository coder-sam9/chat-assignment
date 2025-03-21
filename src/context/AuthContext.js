// context/AuthContext.js
import React, { useEffect, useState, createContext } from 'react';
import { auth, signInAnonymously } from '../config/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    signInAnonymously(auth)
      .then(userCredential => setUser(userCredential.user))
      .catch(error => console.log("Auth Error: ", error));
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
