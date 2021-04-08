import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useGlobalContext } from "../context";

const LoginUser = () => { 
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); //error state
  const { history } = useGlobalContext();
  const adminUser = { //hardcoded user
    email: "john@mail",
    password: "123"
  };
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
    setDetails({ email: "", password: "" })
  };
  
  const Login = (details) => { //pass the user of input
    if (
      details.email === adminUser.email && //input validation v local data
      details.password === adminUser.password
    ) {
      sessionStorage.setItem('user', 'John');
      history.push('/');
    } else {
      setError("details do not match!"); //display error
    }
  };
  return (
    <div className="App">
      {sessionStorage.getItem('user') === null ? <LoginForm disabled={details.password.length<1} Login={Login} error={error} submitHandler={submitHandler} setDetails={setDetails} details={details}/> : history.push('/')}
    </div>
  );
};

export default LoginUser;

