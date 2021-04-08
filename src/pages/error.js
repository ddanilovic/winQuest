import React from "react";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1>this page does not exist!</h1>
      <Link to="/">go back to home</Link>
    </div>
  );
};

export default Error;
