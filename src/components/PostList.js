import React from "react";
import Spinner from "../ui/Spinner";
import Post from "./Post";
import { useGlobalContext } from "../context";
import Navbar from "./Navbar";

const PostList = () => {
  const { loading, posts } = useGlobalContext();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      {posts.map((p) => (
        <Post p={p} key={p.id} />
      ))}
    </>
  );
};

export default PostList;
