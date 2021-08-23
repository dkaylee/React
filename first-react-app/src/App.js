import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

// 
import Home from './views/Home/Home';
import About from './views/About/About';
import Class from './views/Home/Class';
import Gallery from './views/Home/Gallery';
import Map from './views/Home/Map';


function App() {
  return (
    <div className="App">
      <p>Home</p>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/class" component={Class} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/map" component={Map} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
