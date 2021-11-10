import React from "react";
import Reducer from "./Reducer";

export const StoreContext = React.createContext({});

const initState = {
  openNav: false,
  showOverlay: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, initState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
