import { signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserData,
} from "../utils/firebase/firebase";
//value that you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  // signOutUser();
  useEffect(() => {
    const Unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserData(user);
      }
      setCurrentUser(user);
    });
    return Unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
