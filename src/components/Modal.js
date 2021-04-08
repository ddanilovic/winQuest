import React from "react";
import { FaTimes } from "react-icons/fa";
import UserList from "./UserList"

const Modal = ({isModalOpen, closeModal}) => {
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <section className="post">
        {isModalOpen? <UserList /> : ""}
        </section>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
