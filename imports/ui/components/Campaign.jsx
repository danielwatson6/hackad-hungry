import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'

import Campaigns from '../../api/campaigns'


class Campaign extends Component {
  
  render() {
    return (
      <div id="Campaign">
        {/* TODO: make this nice */}
        <h1>{this.props.campaign.name}</h1>
      </div>
    )
  }
}

Campaign.propTypes = {
  subscriptionReady: PropTypes.bool,
}

export default createContainer((params) => {
  return {
    // TODO: fetch from collection
    campaign: Campaigns.findOne(params._id),
    subscriptionReady: FlowRouter.subsReady('campaign'),
    currentUser: Meteor.user(),
  }
}, Campaign)
