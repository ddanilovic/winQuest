import React, {useState, useEffect} from "react";
import User from "./User";
import Modal from "./Modal"
import { useGlobalContext } from '../context';

const BlogPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchModal, fetchUserPosts, singlePost } = useGlobalContext();

  useEffect(() => {
    fetchModal(singlePost.userId);
    fetchUserPosts(singlePost.userId);
  },[singlePost.userId]); 

  const openModal = () => {
    setIsModalOpen(true);
      
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <>
        <Modal closeModal={closeModal} isModalOpen={isModalOpen}/>
        <div className="detail posting">
          <h4>23MAR21 10:15AM </h4>
          <h4 onClick={openModal}><User id={singlePost.userId} /></h4>
        </div>
        <div className="info">
          <h2>{singlePost.title}</h2>
          <p>{singlePost.body}</p>
        </div>
      </>
  );
};

export default BlogPost;
//  onClick={handleModal}