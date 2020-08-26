import React, { useEffect } from "react";
import "./effects.css";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHooks = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form with custom hooks</h1>
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          autoComplete="off"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>

      <button className="btn btn-primary" type="submit">Save!</button>
    </form>
  );
};
