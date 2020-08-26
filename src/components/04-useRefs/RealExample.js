import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExample = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Hola ref real</h1>
      <hr></hr>
      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show && <MultipleCustomHooks></MultipleCustomHooks>}

    </div>
  );
};
