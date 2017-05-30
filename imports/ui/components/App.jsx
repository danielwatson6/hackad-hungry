import { Meteor } from 'meteor/meteor';
import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//----------------------DB IMPORTS----------------------
import Campaigns from '/imports/api/campaigns';
import Restaurants from '/imports/api/restaurants';
import FakeLayout from '/imports/ui/components/fakelayout.jsx';
import Header from '/imports/ui/components/Header.jsx';
import { userAccountSchema,  loginSchema } from '/imports/api/userAccountsSchema.jsx';

export default class App extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
        campaigns: Meteor.subscribe('campaigns'),
        restaurants: Meteor.subscribe('restaurants'),
        names: Meteor.subscribe('users.name', Meteor.userId())
      }
    }
  }

  componentWillUnmount(){
    // stop / unsubscribe from each data subscription
    this.state.subscription.campaigns.stop();
    this.state.subscription.restaurants.stop();
    this.state.subscription.names.stop();

  }

  test(){
    return this.state.subscription.campaigns;
  }

  render(){
    {if(!Meteor.userId()){
      FlowRouter.go('/splash');
    }}
    {console.log(this.test())}
    return (
      <div>
        <h1 className="text-center text-uppercase">home</h1>
        <FakeLayout />
      </div>
    );
  }

}
