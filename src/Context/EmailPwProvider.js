import React, { useState } from "react";
import { auth, db } from "~/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import ToastError from "../components/ToastError/ToastError";

const EmailPwContext = React.createContext();
function EmailPwProvider({ children }) {
  const [userSignIn, setUserSignIn] = useState({});
  const [ toast, setToast ] = useState(false);

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
        setToast(false)
      })
      .catch((error) => {
        setToast(true)
      });
  };
  const valusSignIn = {
    userSignIn,
    handleSignIn,
  };

  React.useEffect(() => {
    let messToastID = setTimeout(() => {
      setToast(false)
    }, 10000)

    return () => clearTimeout(messToastID)
  }, [toast]) 

  return (
    <EmailPwContext.Provider value={valusSignIn}>
      {toast ? <ToastError /> : <></>}
      {children}
    </EmailPwContext.Provider>
  );
}

export { EmailPwContext };
export default EmailPwProvider;
