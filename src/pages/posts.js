import axios from "axios";
import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";

function Posts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setPosts(result.data);
      setLoading(false);
    };

    fetchItems();
  }, []); //argument is for dependencies

  return (
    <div>
      <PostList posts={posts} loading={loading} />
    </div>
  );
}

export default Posts;
