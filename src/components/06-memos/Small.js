import React from "react";

export const Small = React.memo(({value}) => {
  console.log("nuevo render")
  return <small>{value}</small>;
});
