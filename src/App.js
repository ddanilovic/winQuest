import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Blog from "./pages/blog";
import LoginUser from "./pages/login-user";
import LogoutUser from "./pages/logout-user";
import Error from "./pages/error";

function App() {
  return (
    //react router data
    <>
      <Switch>
        <Route exact path="/login" component={LoginUser} />
        <Route exact path="/" component={Posts} />
        <Route exact path="/logout" component={LogoutUser} />
        <Route exact path="/error" component={Error} />
        <Route exact path={`/:slug`} component={Blog} />
      </Switch>
    </>
  );
}

export default App;
