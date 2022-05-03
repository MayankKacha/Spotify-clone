import React,{useContext, createContext, useReducer } from "react";

//it prepares the datalayer for whats about to come
export const DataLayerContext = createContext();

// here children is whatever wrapped inside datalayer tags. in index.js file its App.js is children
export const DataLayer = ({initialState , reducer , children}) => (
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);