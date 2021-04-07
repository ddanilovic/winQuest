import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
//import UserModal from "./UserModal";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <section className="post">
            {/* <UserModal />     */}
        </section>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
