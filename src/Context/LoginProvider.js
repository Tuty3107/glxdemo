import React from "react";
import { auth, db } from "~/firebase/config";
import {
  FacebookAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
} from "firebase/auth";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

const fbProvider = new FacebookAuthProvider();
const LoginContext = React.createContext();
function LoginProvider({ children }) {
  const handleFbLogin = async () => {
    const user = await signInWithPopup(auth, fbProvider);
    const { isNewUser } = getAdditionalUserInfo(user);
    if (isNewUser) {
      await addDoc(collection(db, "users"), {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
        providerId: auth.currentUser.providerId,
        timestamp: serverTimestamp(),
      });
    }
  };
  return (
    <LoginContext.Provider value={handleFbLogin}>
      {children}
    </LoginContext.Provider>
  );
}

export { LoginContext };
export default LoginProvider;
