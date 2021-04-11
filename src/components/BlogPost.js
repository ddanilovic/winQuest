import React, { useState, useEffect } from "react";
import User from "./User";
import Modal from "./Modal";
import { useGlobalContext } from "../context";

const BlogPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    //import data from state management system
    fetchModal,
    fetchUserPosts,
    singlePost,
    loading,
  } = useGlobalContext();

  const id = singlePost.userId; //id
  const p = singlePost.body; //content

  useEffect(() => {
    //fetch data when page loads
    fetchModal(id);
    fetchUserPosts(id);
  }, [id]); // eslint-disable-line

  const openModal = () => {
    //on click open modal
    setIsModalOpen(true);
    document.body.style = "overflow: hidden;"; //hide scroll in modal
  };
  const closeModal = () => {
    //on click close modal
    setIsModalOpen(false);
    document.body.style = "overflow: visible;";
  };

  return loading ? null : (
    <>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div className="detail posting">
        <h4>23MAR21 10:15AM </h4>
        <h4 onClick={openModal} className="link">
          {id !== undefined ? <User id={id} /> : null}
        </h4>
      </div>
      <div className="info">
        <h2>{singlePost.title}</h2>
        <p>
          {p}
          {p}
          {p}
        </p>
        <p>
          {p}
          {p}
        </p>
        <p>
          {p}
          {p}
        </p>
      </div>
    </>
  );
};

export default BlogPost;
