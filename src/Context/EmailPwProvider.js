import React, { useState } from "react";
import { auth } from "~/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
          localStorage.setItem("userSignIn", userSignIn);
        }
        setToast(false);
        alert("SignIn successfull!!!")
      })
      .catch((error) => {
        setToast(true)
      });
  };
  const valueSignIn = {
    userSignIn,
    handleSignIn,
  };

  React.useEffect(() => {
    let messToastID = setTimeout(() => {
      setToast(false)
    }, 7000)

    return () => clearTimeout(messToastID)
  }, [toast])

  return (
    <EmailPwContext.Provider value={valueSignIn}>
      {toast ? <ToastError /> : <></>}
      {children}
    </EmailPwContext.Provider>
  );
}

export { EmailPwContext };
export default EmailPwProvider;
