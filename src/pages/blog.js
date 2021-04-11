import React, { useEffect } from "react";
import ComList from "../components/ComList";
import { useGlobalContext } from "../context";
import BlogPost from "../components/BlogPost";
import Navbar from "../components/Navbar";

const Blog = ({ match }) => {
  const {
    handleLoading,
    fetchCom,
    fetchSinglePost,
    history,
    setCom,
    setSinglePost
  } = useGlobalContext();

  const query = match.params.slug;
  useEffect(() => {
    //data fetch when page loaded
    setCom([]);
    setSinglePost([]);
    handleLoading(true);
    fetchCom(query);
    handleLoading(true);
    fetchSinglePost(query);
  }, [query]); // eslint-disable-line

  return (
    <>
      {query >= 1 && //display page only if user logged
      100 >= query &&
      sessionStorage.getItem("user") === "John" ? (
        <>
          <Navbar />
          <div className="post-list">
            <section className="post">
              <BlogPost />
              <ComList />
            </section>
          </div>
        </>
      ) : (
        history.push("/error") //display error if user not logged
      )}
    </>
  );
};

export default Blog;
