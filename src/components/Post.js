import React from "react";
import { Link } from "react-router-dom";
import User from "./User";
import { useGlobalContext } from '../context';

const Post = ({ p }) => {
  const {modal} = useGlobalContext()
  return (
    <Link to={`/${p.id}`}>
      <section className="post">
        <div className="post-info">
          <h2>{p.title}</h2>
          <p>{p.body}</p>
        </div>
        <div className="detail">
          <h4>23MAR21 10:15AM </h4>
          <h4><User id={p.userId} /></h4>
        </div>
      </section>
    </Link>
  );
};

export default Post;
