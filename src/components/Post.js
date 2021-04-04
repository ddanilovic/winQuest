import React from "react";
import { Link } from "react-router-dom";
import User from "./User";
import Modal from "./Modal";

const Post = ({ p, handleModal }) => {
  return (
    <Link to={`/${p.id}`}>
      <section className="list-posts">
        <h2>{p.title}</h2>
        <p>{p.body}</p>
        <h4>
          <User onClick={<Modal />} id={p.userId} />
        </h4>
      </section>
    </Link>
  );
};

export default Post;
