import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom"

const LoginUser = () => { 
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); //error state
  const adminUser = { //hardcoded user
    email: "john@mail",
    password: "123"
  };
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  
  

  const Login = (details) => { //pass the user of input
    if (
      details.email === adminUser.email && //input validation v local data
      details.password === adminUser.password
    ) {
      sessionStorage.setItem('user', 'John');
      window.location.reload();
    } else {
      setError("details do not match!"); //display error
    }
  };

  let data = sessionStorage.getItem('user');
  return (
    <div className="App">
      {sessionStorage.getItem('user') === null ? <LoginForm Login={Login} error={error} submitHandler={submitHandler} setDetails={setDetails} details={details}/> : <Redirect to="/" />}
    </div>
  );
};

export default LoginUser;

