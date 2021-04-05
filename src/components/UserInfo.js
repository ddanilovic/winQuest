import React from "react";
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";
import Post from "./Post";

const UserInfo = () => {
  const { loading, userInfoModal} = useGlobalContext();
  return loading ? (
    <Spinner />
  ) : (
    <main>
        <div>
          <h4>{userInfoModal.email}</h4>
          <h2>{userInfoModal.name}</h2>
        </div>
    </main>
  );
};

export default UserInfo;
