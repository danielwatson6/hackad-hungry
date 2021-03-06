import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Session } from 'meteor/session';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//----------------------USER DEFINED IMPORTS----------------------
import Campaigns from '/imports/api/campaigns';
import Restaurants from '/imports/api/restaurants';
import FakeLayout from '/imports/ui/components/fakelayout.jsx';
import Header from '/imports/ui/components/Header.jsx';
import { userAccountSchema,  loginSchema } from '/imports/schemas/userAccountsSchema.jsx';

export default class App extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        campaigns: Meteor.subscribe('campaigns'),
        restaurants: Meteor.subscribe('restaurants'),
      }
    }
  }


  componentWillUnmount(){
    // stop / unsubscribe from each data subscription
    this.state.subscription.campaigns.stop();
    this.state.subscription.restaurants.stop();

  }


  render(){
    if(!Meteor.userId()){
      FlowRouter.go('/splash');
    }

    return (
      <div>
        <h1 className="text-center text-uppercase">home</h1>
        <FakeLayout />
      </div>
    );
  }

}
