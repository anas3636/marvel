import React, { Component } from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from './components/Home/Home';
import Sheet from './components/Sheet/Sheet';

class App extends Component {
  render() {
    return (
       <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/character/:id" component={Sheet} />
          </div>
        </Router>
    );
  }
}

export default App;
