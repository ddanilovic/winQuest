import React, { useState, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [userModal, setUserModal] = useState([]);
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
    } else {
      console.log("404 go to homepage")
    }
    setLoading(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
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
        singlePost
        
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
