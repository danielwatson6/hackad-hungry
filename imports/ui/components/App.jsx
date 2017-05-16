import { Meteor } from 'meteor/meteor';
import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//----------------------DB IMPORTS----------------------
import Campaigns from '/imports/api/campaigns';
import Restaurants from '/imports/api/restaurants';

export default class App extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        campaigns: Meteor.subscribe('campaigns'),
        restaurants: Meteor.subscribe('restaurants')
      }
    }
  }

  componentWillUnmount(){
    // stop / unsubscribe from each data subscription
    this.state.subscription.campaigns.stop();
    this.state.subscription.restaurants.stop();

  }

  test(){
    return this.state.subscription.campaigns;
  }

  render(){
    {console.log(this.test())}
    return (
      <div className="container-fluid">
        <h1>Main Page</h1>
      </div>
    );
  }

}
