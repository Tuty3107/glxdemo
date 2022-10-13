import React from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
