import React, { useEffect } from "react";
import ComList from "../components/ComList";
import { useGlobalContext } from "../context";
import Modal from "../components/Modal"

const Blog = () => {
    const { fetchItems } = useGlobalContext();
    const query = window.location.href.split("/").slice(-1).toString();
    useEffect(() => {
      fetchItems(`https://jsonplaceholder.typicode.com/posts/${query}`);
      fetchItems(`https://jsonplaceholder.typicode.com/posts/${query}/comments`);
      //fetchItems(`https://jsonplaceholder.typicode.com/users?id=1`);//${id}
      //fetchItems(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    }, []); 
  
    return (
      <>
        <Modal />
        <ComList query={query}/>
      </>
    );
};

export default Blog;
