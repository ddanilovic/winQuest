import React, { useState, useEffect } from "react";
import UserPostList from "./UserPostList"
import UserInfo from "./UserInfo"


import { useGlobalContext } from "../context";

const UserModal = () => {
    const {fetchItems, userModal} = useGlobalContext();
    useEffect(() => {
      console.log(userModal)
      fetchItems(`https://jsonplaceholder.typicode.com/users?userId=${userModal}`);
    }, []); 
  
    return (
      <div>
        <UserInfo />
        {/* <UserPostList/> */}
      </div>
    );
};

export default UserModal;
