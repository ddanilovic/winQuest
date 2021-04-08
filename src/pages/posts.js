import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useGlobalContext } from "../context";

function Posts() {
  const { posts, fetchPosts, history } = useGlobalContext();
  const url = "https://jsonplaceholder.typicode.com/posts"
  useEffect(() => {
    fetchPosts(url);
  },[url]); 

  return (
    <>
      {sessionStorage.getItem('user') === "John" ? <PostList posts={posts} /> : history.push('/login')} 
    </>
  );
}

export default Posts;
