// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import React from 'react';
import { useCounterContext } from '../hooks/useCounterContext'

const ChangeCounter = () => {
    const {counter, setCounter} = useCounterContext()

    const addValueToCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    return (
        <div>
            <button onClick={addValueToCounter}>Add value to counter</button>
        </div>
    );
};

export default ChangeCounter;
