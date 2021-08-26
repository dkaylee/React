import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Dari from "views/Dari/Dari.js";
import About from "views/About/About.js";
import Class from "views/Class/Class.js";
import Gallery from "views/Gallery/Gallery.js";
import Map from "views/Map/Map.js";
import Post from "views/Admin/Post.js";
import Register from "views/Admin/Register.js";
import Login from "views/Admin/Login.js";
import WritePost from "views/Admin/WritePost.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/dari" component={Dari} />
      <Route path="/about" component={About} />
      <Route path="/class" component={Class} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/login" component={Map} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/wirte-post" component={WritePost} />
      <Route path="/post" component={Post} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
