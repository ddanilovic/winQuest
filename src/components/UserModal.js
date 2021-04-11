import React from "react";
import { useGlobalContext } from "../context";

const UserModal = () => {
  const { userInfoModal } = useGlobalContext(); //import data from state management system
  return (
    //login form html
    <>
      <div className="info-user">
        <h2>{userInfoModal[0].username}</h2>
      </div>
      <div className="user-section">
        <div className="user-ele">
          <p>NAME </p>
        </div>
        <h4>{userInfoModal[0].name}</h4>
      </div>
      <div className="user-section">
        <div className="user-ele">
          <p>ADDRESS </p>
        </div>
        <div className="user-address">
          <h4>{userInfoModal[0].address.street}</h4>
          <h4>{userInfoModal[0].address.suite}</h4>
          <h4>{userInfoModal[0].address.city}</h4>
          <h4>{userInfoModal[0].address.zipcode}</h4>
        </div>
      </div>
      <div className="user-section">
        <div className="user-ele">
          <p>COMPANY </p>
        </div>
        <h4>{userInfoModal[0].company.name}</h4>
      </div>
    </>
  );
};

export default UserModal;
