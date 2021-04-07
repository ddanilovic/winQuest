import React, { useState, useContext } from "react";
import axios from "axios";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [userModal, setUserModal] = useState(1);
  const [userInfoModal, setUserInfoModal] = useState([]);
  const [com, setCom] = useState([]);


  const fetchItems = async (url) => {
    const result = await axios(url);
    if(url.split("/").slice(-1).toString() === "comments"){
      setCom(result.data);

    } else if(url.split("/").slice(-2,-1).toString() === "posts") {
      setSinglePost(result.data)
    }
     else if(url.split("/").slice(-1).toString() === "posts") {
      setPosts(result.data);
    // } else if (typeof url.split("=").slice(-1) === "object"){ 
    //   setUserInfoModal(result.data) 
    //   console.log("modall")
    } else {
      console.log("404 go back to homepage")
    }
    setLoading(false);
  };

  const modal = (id) => {
    // const data = fetchItems(`https://jsonplaceholder.typicode.com/users?id=${id}`) 
    // setUserInfoModal(data)
    //openModal() //this might be a problem
  }

  const openModal = () => {
    setIsModalOpen(true);
    // setUserModal(id)
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        posts,
        com,
        userModal,
        fetchItems,
        loading,
        singlePost,
        modal, 
        userInfoModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
