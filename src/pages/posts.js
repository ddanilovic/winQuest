import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";
import { useGlobalContext } from "../context";

function Posts() {
  const { posts, fetchPosts, history, handleLoading } = useGlobalContext(); //pulling state from state management system
  const url = "https://jsonplaceholder.typicode.com/posts"; //api url
  useEffect(() => {
    //fetch data when page loads
    handleLoading(true);
    fetchPosts(url);
  }, [url]); // eslint-disable-line 

  return (
    <>
      {sessionStorage.getItem("user") === "John" ? ( //if user logged display data
        <>
          <Navbar />
          <PostList posts={posts} />
        </>
      ) : (
        history.push("/login") //if not logged go to login page
      )}
    </>
  );
}

export default Posts;
