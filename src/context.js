import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //global state
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [userInfoModal, setUserInfoModal] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [com, setCom] = useState([]);
  const history = useHistory();

  const handleLoading = (a) => {
    //loading handler
    setLoading(a);
  };

  //data fetch handlers
  const fetchPosts = async (url) => {
    const result = await axios(url);
    setPosts(result.data);
    setLoading(false);
  };
  const fetchCom = async (query) => {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/posts/${query}/comments`
    );
    setCom(result.data);
    setLoading(false);
  };
  const fetchSinglePost = async (query) => {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/posts/${query}`
    );
    setSinglePost(result.data);
    setLoading(false);
  };
  const fetchModal = async (id) => {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    );
    setUserInfoModal(result.data);
  };
  const fetchUserPosts = async (id) => {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    setUserPosts(result.data);
  };

  return (
    //export data
    <AppContext.Provider
      value={{
        loading,
        handleLoading,
        posts,
        com,
        fetchPosts,
        fetchCom,
        fetchSinglePost,
        fetchModal,
        fetchUserPosts,
        userPosts,
        singlePost,
        userInfoModal,
        history,
        setSinglePost,
        setCom
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
