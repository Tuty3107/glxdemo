import React from "react";

const SignInContext = React.createContext();
function SignInProvider({ children }) {
  return <SignInContext.Provider>{children}</SignInContext.Provider>;
}

export default SignInProvider;
