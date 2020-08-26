import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const UseForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("hola");
  }, []);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>UseEffect</h1>
      <hr></hr>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          autoComplete="off"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          autoComplete="off"
          placeholder="email@email.com"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {(name === "123") && <Message></Message>}
    </div>
  );
};
