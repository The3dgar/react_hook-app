import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({x:0,y:0})
  const {x, y} = coords

  useEffect(() => {
    const mouseMove = (e) => {
      // algun proceso super costoso
      const coords =  { x: e.x, y: e.y }
      setCoords(coords)
    };
    window.addEventListener("mousemove", mouseMove)

    return () => {  
      window.removeEventListener("mousemove", mouseMove)
      
    };
  }, []);

  return (
    <div>
      <h3>COORS {x} - {y}</h3>
    </div>
  );
};
