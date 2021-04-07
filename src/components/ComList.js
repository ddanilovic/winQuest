import React from "react";
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";
import BlogPost from "./BlogPost";

const ComList = () => {
  const { loading, com, singlePost} = useGlobalContext();
  return loading ? (
    <Spinner />
  ) : (
    <div class="blog-post">
      <section class="post">
        <BlogPost p={singlePost} />
        <div className="comments">
          <div className="info-box">
                <h3>Comments</h3>
          </div>
            {com.map((p) => (
                <div className="info-box" key={p.id}>
                  <h6><span>{p.email}</span> commented on <span>21MAR2021 10:14AM</span></h6>
                  <p>{p.body}</p>
                </div>     
            ))}
        </div>
      </section>
      
    </div>
  );
};

export default ComList;
