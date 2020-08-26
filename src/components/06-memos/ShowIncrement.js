import React from "react";

export const ShowIncrement = React.memo(({ incrementar }) => {
  console.log("Render!");
  return (
    <button className="btn btn-primary" onClick={() => incrementar(5)}>
      +1
    </button>
  );
});
