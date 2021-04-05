import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useGlobalContext } from "../context";


function Posts() {
  const { posts, fetchItems, openModal} = useGlobalContext();

  useEffect(() => {
    fetchItems("https://jsonplaceholder.typicode.com/posts");
  }, []); 

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}

export default Posts;
