import React from 'react'
import Spinner from "../ui/Spinner";
import { useGlobalContext } from "../context";

const UserList = () => {
    const { loading, userInfoModal, userPosts} = useGlobalContext();
    console.log(userPosts)
  return loading ? (
    <Spinner />
  ) : (
    <>   
        {userInfoModal === [] ? <Spinner /> : 
          <div>
            <h3>{userInfoModal[0].username}</h3>
            <h2>{userInfoModal[0].name}</h2>
          </div>
        }
        {userPosts === [] ? <Spinner /> : //component with map needed for these posts!
          <div>
            <h3>{userInfoModal[0].username}</h3> 
            <h2>{userInfoModal[0].name}</h2>
          </div>
        }     
    </>
  );
}

export default UserList
