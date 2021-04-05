import React from "react";
import { Link } from "react-router-dom";
import User from "./User";
import { useGlobalContext } from '../context';

const Post = ({ p }) => {
  const {openModal} = useGlobalContext()
  return (
    <Link to={`/${p.id}`}>
      <section className="list-posts">
        <h2>{p.title}</h2>
        <p>{p.body}</p>
        <h4>
          <User onClick={openModal} id={p.userId} />
        </h4>
      </section>
    </Link>
  );
};

export default Post;
