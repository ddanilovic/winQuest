import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <h4>
        Hello,{" "}
        <Link to="/logout" className="user">
          John
        </Link>
        .
      </h4>
    </nav>
  );
};

export default Navbar;
