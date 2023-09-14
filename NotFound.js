import React from 'react';
import { useNavigate } from 'react-router-dom';

const  NotFound = () => {
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate("/");
    }
  return (
    <div> <h1>Oops , Seems like you have entered at a wrong place.</h1>
    <button onClick={handleBack}>Back to Home</button>
    </div>
  )
}

export default  NotFound;