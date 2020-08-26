import React from "react";

import "./Counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>Counter with Hook: {state}</h1>
      <hr></hr>
      <button onClick={()=>increment(3)} className="btn">+3</button>
      <button onClick={()=>decrement(8)} className="btn">-8</button>
      <button onClick={reset} className="btn">reset</button>
    </div>
  );
};
