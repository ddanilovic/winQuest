import React from "react";
import { useGlobalContext } from "../context";
import Spinner from "../ui/Spinner";

const UserPosts = () => {
  const { userPosts, loading } = useGlobalContext(); //import data from state management system
  return loading ? ( //if data loads display spinner
    <Spinner />
  ) : (
    <>
      {userPosts.slice(0, 3).map((item) => {
        //display only 3 posts
        return (
          <div key={item.id} className="user-posts">
            <h4>{item.title}</h4>
            <p>23MAR21 10:15AM </p>
          </div>
        );
      })}
    </>
  );
};

export default UserPosts;
