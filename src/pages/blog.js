import axios from "axios";
import React, { useState, useEffect } from "react";
import ComList from "../components/ComList";
import Redirect from "react-router-dom";

const Blog = () => {
  //return page url is not between 1-100 ? ( <Redirect to='/error'/>
  //) : (

  //[query, setQuery] = useState();//mozda ""
  const [loading, setLoading] = useState(true);
  const [com, setCom] = useState([]);
  useEffect(() => {
    const query = window.location.href.split("/").slice(-1).toString(); //-1 last character in array
    const fetchItems = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts/${query}/comments`
      );
      //console.log(result.data);
      setCom(result.data);
      setLoading(false);
    };

    fetchItems();
  }, []); //add query here
  return (
    <section className="list-posts">
      <ComList com={com} loading={loading} />
    </section>
  );
};

export default Blog;
