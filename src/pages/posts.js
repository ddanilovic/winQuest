import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useGlobalContext } from "../context";
import { Redirect } from "react-router-dom"

function Posts() {
  const { posts, fetchItems } = useGlobalContext();

  useEffect(() => {
    fetchItems("https://jsonplaceholder.typicode.com/posts");
  }, []); 

  return (
    <>
      {sessionStorage.getItem('user') === "John" ? <PostList posts={posts} /> : <Redirect to="/login" />} 
    </>
  );
}

export default Posts;
