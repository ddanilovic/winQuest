import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  //error page
  return (
    <div className="error">
      <h1>this page does not exist!</h1>
      <Link className="link" to="/">
        go back to home
      </Link>
    </div>
  );
};

export default Error;
