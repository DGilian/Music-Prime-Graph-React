import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './containers/Home'
import Graph from './containers/Graph'
import Music from './containers/Music'
import Prime from './containers/Prime'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Home} />
            <Route path="/Music" component={Music} />
            <Route path="/Graph" component={Graph} />
            <Route path="/Prime" component={Prime} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
