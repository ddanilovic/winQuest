import React from "react";
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";
import Post from "./Post";

const ComList = ({ query }) => {
  const { loading, com, singlePost} = useGlobalContext();
  const postId = query - 1
  return loading ? (
    <Spinner />
  ) : (
    <main>
      <section className="list-posts">
        <Post p={singlePost} />
      </section>
      {com.map((p) => (
        <div key={p.id}>
          <h4>{p.email}</h4>
          <h2>{p.name}</h2>
          <p>{p.body}</p>
        </div>
      ))}
    </main>
  );
};

export default ComList;
