import React from 'react'
// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'

import {useTitleColorContext} from '../hooks/useTitleColorContext'

export const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()


  return (
    <div>
      <h2>Home</h2>
      <p>Valor do contador : {counter}</p>

      <ChangeCounter/>
    </div>
  )
}

