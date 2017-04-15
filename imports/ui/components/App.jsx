import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import CampaignsCollection from '../../api/campaigns.js';
import Campaigns from './Campaigns.jsx';

class App extends Component{
  render(){
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

App.propTypes = {
  campaigns: PropTypes.array.isRequired
};

export default createContainer(()=>{
    return {
      campaigns: CampaignsCollection.find({}).fetch()
    };
}, App);
