import React from "react";
import { useGlobalContext } from "../context";

const BlogList = () => {
  const { posts, fetchItems} = useGlobalContext();

  useEffect(() => {
    fetchItems("https://jsonplaceholder.typicode.com/posts");
  }, []); 

  return (
    <section className="list-posts">
      {posts.map((p) => (
        <section>
            <h2>{p.title}</h2>
            <p>{p.body}</p>
        </section>
      ))}
    </section>
  );
};

export default BlogList;
