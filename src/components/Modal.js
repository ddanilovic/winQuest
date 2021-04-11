import React from "react";
import { FaTimes } from "react-icons/fa";
import UserList from "./UserList";
import logo from "../assets/logo.png";

const Modal = ({ isModalOpen, closeModal }) => {
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <div className="modal-nav">
          <img src={logo} alt="logo" className="logo" />
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
        </div>
        <div className="modal-info">{isModalOpen ? <UserList /> : null}</div>
      </div>
    </div>
  );
};

export default Modal;
