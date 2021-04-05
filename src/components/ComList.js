import React from "react";
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";
import Post from "./Post";

const ComList = () => {
  const { loading, com, singlePost} = useGlobalContext();
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Post p={singlePost} />
      <section className="comments">
      <div class="info-box">
            <h3>Comments</h3>
      </div>
        {com.map((p) => (
          
            <div class="comment-info"key={p.id}>
              <h6><span>{p.email}</span> commented on <span>21MAR2021 10:14</span></h6>
              <p>{p.body}</p>
            </div>
          
        ))}
      </section>
    </>
  );
};

export default ComList;
