import React from "react";
//import Modal from "./components/Modal"
import { Switch, Route } from "react-router-dom";

import Posts from "./pages/posts";
import Blog from "./pages/blog";
function App() {
  return (
    <>
      {/* <button onClick={openModal} className="btn">
        show modal
      </button> */}
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path={`/:slug`} component={Blog} />
      </Switch>
    </>
  );
}

export default App;

// <Switch>
//         <Route exact path="/" component={Login} />
//         {/* <Route exact path="/login" component={Login} /> */}
//         <Route exact path="/posts/slug:" component={Blog} />
//         {/* <Route exact path="/posts" component={Blogs} /> */}
//         <Route component={Error} />
// </Switch>
