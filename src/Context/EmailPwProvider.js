import React, { useState } from "react";
import { auth, db } from "~/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const EmailPwContext = React.createContext();
function EmailPwProvider({ children }) {
  const [userSignIn, setUserSignIn] = useState({});

  const handleSignIn = (email = "", password = "") => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const { email, photoURL } = user;
          setUserSignIn({ email, photoURL });
          addDoc(collection(db, "usersSignIn"), {
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
          });
          localStorage.setItem("userSignIn", userSignIn);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const valusSignIn = {
    userSignIn,
    handleSignIn,
  };

  return (
    <EmailPwContext.Provider value={valusSignIn}>
      {children}
    </EmailPwContext.Provider>
  );
}

export { EmailPwContext };
export default EmailPwProvider;
