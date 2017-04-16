import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import CampaignsCollection from '../../api/campaigns.js';
import Header from './Header.jsx';

class App extends Component{
  render(){
    return (
      <div>
        <Header />
        <h1> Main Page </h1>
      </div>
    );
  }
}

export default createContainer(()=>{
    return {
      campaigns: CampaignsCollection.find({}).fetch()
    };
}, App);
