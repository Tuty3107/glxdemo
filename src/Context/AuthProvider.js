import React, { useState } from "react";
import { auth } from "~/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"

const AuthContext = React.createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  React.useEffect(() => {
    const unsubcibled = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL
        });
        localStorage.setItem("user", user)
      }

      navigate("/")
      return;
    });
    navigate("/")

    return () => unsubcibled();
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
