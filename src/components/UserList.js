import React from "react";
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";
import UserPosts from "./UserPosts";
import UserModal from "./UserModal";

const UserList = () => {
  const { loading, userInfoModal } = useGlobalContext(); //import data from state management system

  return loading ? ( //if loading display spinner
    <Spinner />
  ) : (
    <>
      {userInfoModal !== [] ? <UserModal /> : null}
      <UserPosts />
    </>
  );
};

export default UserList;
