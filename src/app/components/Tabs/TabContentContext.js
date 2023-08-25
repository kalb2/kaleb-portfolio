"use client"
import React, { createContext, useContext, useReducer } from "react";

const TabContentContext = createContext();

export function useTabContentContext() {
  return useContext(TabContentContext);
}

const initialState = []; // Initial state is an empty array

function tabContentReducer(state, action) {
  switch (action.type) {
    case "SET_CONTENT_DATA":
      return action.payload;
    default:
      return state;
  }
}

export function TabContentProvider({ children }) {
  const [tabContentData, dispatch] = useReducer(tabContentReducer, initialState);

  return (
    <TabContentContext.Provider value={{ tabContentData, dispatch }}>
      {children}
    </TabContentContext.Provider>
  );
}

