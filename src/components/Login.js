import React from "react";
//import { useGlobalContext } from './context';

const Login = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        className="form-control"
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        className="form-control"
        onChange={handleChange}
      />
      <br />
      {/* disabled={loading} */}
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
};
export default Login;
