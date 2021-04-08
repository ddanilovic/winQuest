import React, { useState, useContext } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  //const [userModal, setUserModal] = useState(1);
  const [userInfoModal, setUserInfoModal] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [com, setCom] = useState([]);
  const history = useHistory()


  // const fetchItems = async (url) => {
  //   const result = await axios(url);
  //   if(url.split("/").slice(-1).toString() === "comments"){
  //     setCom(result.data);

  //   } else if(url.split("/").slice(-2,-1).toString() === "posts") {
  //     setSinglePost(result.data)
  //   }
  //    else if(url.split("/").slice(-1).toString() === "posts") {
  //     setPosts(result.data);
  //   // } else if (typeof url.split("=").slice(-1) === "object"){ 
  //   //   setUserInfoModal(result.data) 
  //   //   console.log("modall")
  //   } else {
  //     console.log("404 go back to homepage")
  //   }
  //   setLoading(false);
  // };
  

  const fetchPosts = async (url) => {
    const result = await axios(url);
    setPosts(result.data);
    setLoading(false);
  };
  const fetchCom = async (query) => { 
    const result = await axios(`https://jsonplaceholder.typicode.com/posts/${query}/comments`);
    setCom(result.data);
    setLoading(false);
  };
  const fetchSinglePost = async (query) => {
    const result = await axios(`https://jsonplaceholder.typicode.com/posts/${query}`);
    setSinglePost(result.data);
    setLoading(false);
  };
  const fetchModal = async (id) => {
    const result = await axios(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    setUserInfoModal(result.data)
    setLoading(false);
  }
  const fetchUserPosts = async (id) => {
    const result = await axios(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    setUserPosts(result.data)
    setLoading(false);
  }

  const modal = (id) => {
    // const data = fetchItems(`https://jsonplaceholder.typicode.com/users?id=${id}`) 
    // fetchItems(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    // setUserInfoModal(data)
    //openModal() //this might be a problem
  }




  return (
    <AppContext.Provider
      value={{
        loading,
        posts,
        com,
        fetchPosts,
        fetchCom,
        fetchSinglePost,
        fetchModal,
        fetchUserPosts,
        userPosts,
        singlePost,
        modal, 
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
