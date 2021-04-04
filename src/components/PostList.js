import React from "react";
import Spinner from "../ui/Spinner";
import Post from "./Post";

const PostList = ({ posts, loading }) => {
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
