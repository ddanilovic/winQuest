import React from "react";
import User from "./User";
import { useGlobalContext } from '../context';

const BlogPost = ({ p }) => {
  const {modal} = useGlobalContext()
  return (
    <>
      <div className="detail posting">
        <h4>23MAR21 10:15AM </h4>
        <h4 onClick={modal(p.id)}><User id={p.userId} /></h4>
      </div>
      <div className="info">
        <h2>{p.title}</h2>
        <p>{p.body}</p>
      </div>
    </>
  );
};

export default BlogPost;
