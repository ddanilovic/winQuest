import React from "react";
import Spinner from "../ui/Spinner";
import Post from "./Post";
import { useGlobalContext } from "../context";

const PostList = () => {
  const { loading, posts } = useGlobalContext();
  return loading ? (
    <Spinner />
  ) : (
    <section className="list-posts">
      {posts.map((p) => (
        <Post p={p} key={p.id} />
      ))}
    </section>
  );
};

export default PostList;
