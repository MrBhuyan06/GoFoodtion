import React, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();
// console.log(createContext());

export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(initialState, reducer)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);
