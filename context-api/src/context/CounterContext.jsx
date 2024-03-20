import React, { createContext, useState , useReducer } from "react";


export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(5); 

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};