import React from "react";
import { useGlobalContext } from "../context";


const ComList = () => {
  const {com} = useGlobalContext();
  return (
      <>
        <div className="comments">
          <div className="info-box">
                <h3 className="comment-col">Comments</h3>
          </div>
            {com.map((p) => (
                <div className="info-box" key={p.id}>
                  <h6><span className="comment-col">{p.email}</span> commented on <span>21MAR2021 10:14AM</span></h6>
                  <p>{p.body}</p>
                </div>     
            ))}
        </div>
      </>

  );
};

export default ComList;
