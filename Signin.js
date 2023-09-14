import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import Signup from "./Signup";

const Signin = () => {
  const  help = useNavigate();
  const handleClick =() =>{
    help("/");
  }
  return (
    <div className="form">
      <form>
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
        <button onClick={handleClick}>Sign in</button>
      </form>
      <h5>Don't have an Account? Click below to Sign up</h5>
      <Link to="/signup">Signup</Link>
     
    </div>
  );
};

export default Signin;
