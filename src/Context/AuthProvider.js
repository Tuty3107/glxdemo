import React, { useState } from "react";
import { auth } from "~/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
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
      }
    });

    return () => unsubcibled();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
