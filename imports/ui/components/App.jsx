import React, { Component } from 'react';

import Campaigns from './Campaigns'

//data for testing, should come from database
let campaignList = [{
    id: 1,
    name: 'somename',
    owner: 'owner1',
    deadline: 'somedeadline',
    restaurant: 'somerestaurant',
    status: 'isOpen',
  },
  {
    id: 2,
    name: 'somename2',
    owner: 'owner2',
    deadline: "somedeadline2",
    restaurant: 'somerestaurant2',
    status: 'isOpen',
  },
  {
    id: 3,
    name: 'somename3',
    owner: 'owner3',
    deadline: "somedeadline3",
    restaurant: 'somerestaurant3',
    status: 'isOpen',
  },
  {
    id: 4,
    name: 'somename4',
    owner: 'owner4',
    deadline: "somedeadline4",
    restaurant: 'somerestaurant4',
    status: 'isOpen',
  },]

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
