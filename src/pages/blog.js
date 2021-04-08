import React, { useEffect } from "react";
import ComList from "../components/ComList";
import { useGlobalContext } from "../context";
import BlogPost from "../components/BlogPost";
import Spinner from "../ui/Spinner";

const Blog = ({match}) => {
    const { loading,fetchCom,fetchSinglePost,history,setSinglePost,setCom } = useGlobalContext();
    //const query = match.params.slug //change this to router version
    const query = match.params.slug
    useEffect(() => {
      setSinglePost([]);
      setCom([])
      fetchSinglePost(query);
      fetchCom(query);
    },[query]); 
  
    return loading ? (
      <Spinner />
    ) : (
      <>
      {query >= 1 && 100 >= query && sessionStorage.getItem('user') === "John" ?
        (    
        <div className="blog-post">
        <section className="post">
          <BlogPost />
          <ComList query={query}/>
        </section>
        </div>
        ) 
        : history.push('/error')
      } 
      </>
    );
};

export default Blog;
