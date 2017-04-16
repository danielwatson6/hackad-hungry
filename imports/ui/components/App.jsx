import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import CampaignsCollection from '../../api/campaigns.js';
import Layout from './Layout.jsx';

class App extends Component{
  render(){
    return (
      <div>
        <h1>Test</h1>
        <Layout />
      </div>
    );
  }
}


export default createContainer(()=>{
    return {
      campaigns: CampaignsCollection.find({}).fetch()
    };
}, App);
