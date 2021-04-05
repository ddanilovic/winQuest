import React from "react";
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";

const UserPostList = () => {
  const { loading, userModal } = useGlobalContext();
  return loading ? (
    <Spinner />
  ) : (
    <section className="list-posts">
      {userModal.map((p) => (
        <section key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
        </section>
      ))}
    </section>
  );
};

export default UserPostList;
