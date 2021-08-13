import React from 'react';
import { Link, Route } from 'react-router-dom';
// import './css/App.css';
import Home from './Home';
import About from './About';
import Class from './Class';
import Gallery from './Gallery';
import Map from './Map';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      Dari Academy
      </header>

        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/class" component={Class} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/map" component={Map} />

      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/class" >Class</Link>
        </li>
        <li>
          <Link to="/gallery" >Gallery</Link>
        </li>
        <li>
          <Link to="/map" >Map</Link>
        </li>

      </ul>
      
    </div>
  );
}

export default App;
