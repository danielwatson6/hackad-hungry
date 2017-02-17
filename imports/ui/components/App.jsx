import React, { Component } from 'react';

import Campaigns from './Campaigns'

// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <a href="/" className="navbar-brand">Hungry@NYUAD</a>
      </nav>
      <div className="component">
        {/* <Campaigns /> */}
      </div>
    );
  }
}
