import React from "react";

const Login = ({ handleSubmit, handleChange }) => {
  return (
    <div>
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
      <button className="btn" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};
export default Login;
