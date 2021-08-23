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
import Notice from "views/Notice/Notice.js";
import About from "views/About/About.js";
import Class from "views/Class/Class.js";
import Gallery from "views/Gallery/Gallery.js";
import Map from "views/Map/Map.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/notice" component={Notice} />
      <Route path="/about" component={About} />
      <Route path="/class" component={Class} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/map" component={Map} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
