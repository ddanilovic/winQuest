import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Blog from "./pages/blog";
import UserModal from "./components/UserModal";
import Modal from "./components/Modal"

function App() {
  return (
    <>
      <Modal />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/modal" component={UserModal} />
        <Route exact path={`/:slug`} component={Blog} />
      </Switch>
    </>
  );
}

export default App;

