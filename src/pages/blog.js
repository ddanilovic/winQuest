import React, { useEffect } from "react";
import ComList from "../components/ComList";
import { useGlobalContext } from "../context";

const Blog = () => {
    const { fetchItems} = useGlobalContext();
    const query = window.location.href.split("/").slice(-1).toString();
    useEffect(() => {
      fetchItems(`https://jsonplaceholder.typicode.com/posts/${query}`);
      fetchItems(`https://jsonplaceholder.typicode.com/posts/${query}/comments`);
    }, []); 
  
    return (
      <>
        <ComList query={query}/>
      </>
    );
};

export default Blog;
