import React from "react";
import { Link } from "react-router-dom";
import User from "./User";
import { useGlobalContext } from '../context';

const BlogPost = ({ p }) => {
  const {openModal} = useGlobalContext()
  return (
      <section className="list-posts">
        <h2>{p.title}</h2>
        <p>{p.body}</p>
        <h4>
          <User onClick={openModal(p.userId)} id={p.userId} />
        </h4>
      </section>
  );
};

export default BlogPost;
