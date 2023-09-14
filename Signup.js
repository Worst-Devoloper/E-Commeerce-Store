import React from 'react'

import { useNavigate } from 'react-router-dom';



    const Signup = () =>{
      const redirect = useNavigate();
    
      const handleSubmit = () =>{
       
        redirect("/");
      }
       
  return (  
    <div className="form">
    <form>
      <label>
        Name:
        <input type="text" name="name" placeholder='Enter your name' required/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" placeholder='Enter your email' required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" placeholder='Enter your password' required />
      </label>
      <br />
      <button onClick={handleSubmit} > Signup </button>
    </form>
   
    
  </div>
  )
  }

export default Signup;