import React from "react";
import { useGlobalContext } from "../context";
import logo from "../assets/logo.png";
import { Redirect } from "react-router-dom";

const LogoutUser = () => {
  const { history } = useGlobalContext();
  const Logout = () => {
    //erase user data
    sessionStorage.removeItem("user");
    history.push("/login");
  };
  return (
    <main>
      <section className="container">
        <img src={logo} alt="logo" className="logo" />
        <h2>
          Logged as <span className="comment-col">John</span>
        </h2>
        <button className="btn" onClick={Logout}>
          Logout
        </button>
        {sessionStorage.getItem("user") === null ? (
          <Redirect to="/login" />
        ) : (
          ""
        )}
      </section>
    </main>
  );
};

export default LogoutUser;
