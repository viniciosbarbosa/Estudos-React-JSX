import React from 'react'
import { useContext } from 'react'
import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext';

export const About = () => {
  // const {counter} = useContext(CounterContext)

  const {counter} = useCounterContext()
  const {color , dispatch} = useTitleColorContext()

  return (
    <div>
    <h2 style={{color:color}}>About</h2>
    <p>Valor do contador : {counter}</p>

 
  </div>
  )
}
