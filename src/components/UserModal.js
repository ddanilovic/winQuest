import React, { useState, useEffect } from "react";
import UserPostList from "./UserPostList"

import { useGlobalContext } from "../context";

const UserModal = () => {
    const {fetchItems} = useGlobalContext();
    const query = window.location.href.split("/").slice(-1).toString();
    useEffect(() => {
      fetchItems(`https://jsonplaceholder.typicode.com/users/${query}/posts`);
    }, []); 
  
    return (
      <div>
        <UserPostList/>
      </div>
    );
};

export default UserModal;
