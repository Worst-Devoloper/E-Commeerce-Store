import React from "react";
import "./App.css";

const Form = () => {
  function handleLogin() {
 
  }

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Form;
