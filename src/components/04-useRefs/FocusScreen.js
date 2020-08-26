import React, { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
  }
  
  return (
    <div>
      <h1>Focus</h1>
      <hr></hr>
      <input ref={inputRef} className="form-control" placeholder="Name"></input>

      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>Focus</button>
    </div>
  )
}
