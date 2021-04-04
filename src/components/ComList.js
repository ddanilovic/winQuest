import React from "react";
import Spinner from "../ui/Spinner";
import Post from "./Post";

const ComList = ({ com, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <main>
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
