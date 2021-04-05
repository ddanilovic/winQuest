import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useGlobalContext } from "../context";

function Posts() {
  const { posts, fetchItems} = useGlobalContext();

  useEffect(() => {
    fetchItems("https://jsonplaceholder.typicode.com/posts");
  }, []); 

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default Posts;
