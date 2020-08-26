import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10)

  // const incrementar = () => setCounter(counter +1 )

  const incrementar = useCallback(
    (num) => {
      setCounter(c=>c + num )
    },
    [setCounter],
  )
  return (
    <div>
      <h1>useCallbackHook: {counter}</h1>
      <hr></hr>
      <ShowIncrement incrementar={incrementar}></ShowIncrement>
    </div>
  )
}
