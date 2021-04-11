import React from "react";
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import User from "./User";

const PostList = () => {
  const { loading, posts } = useGlobalContext(); //import data from state management system
  return loading ? ( //if loading display spinner
    <Spinner />
  ) : (
    <div className="post-list">
      {posts.map((p) => (
        <Link to={`/${p.id}`} key={p.id} p={p}>
          <section className="post">
            <div className="post-info">
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </div>
            <div className="detail">
              <h4>23MAR21 10:15AM </h4>
              <h4>
                <User id={p.userId} />
              </h4>
            </div>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
