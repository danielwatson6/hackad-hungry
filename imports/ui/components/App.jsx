import React, { Component } from 'react';

import Campaigns from './Campaigns'

//data for testing, should come from database
let campaignList = [{
    name: 'somename',
    owner: 'owner1',
    restaurant: 'somerestaurant',
    status: 'isOpen',
  },
  {
    name: 'somename2',
    owner: 'owner2',
    restaurant: 'somerestaurant2',
    status: 'isOpen',
  }]

// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse bg-inverse">
          <a href="/" className="navbar-brand">Hungry@NYUAD</a>
        </nav>
        <div className="component">
          <Campaigns campaigns={campaignList}/>
        </div>
      </div>
    );
  }
}
