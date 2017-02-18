import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'

import CampaignItem from './CampaignItem'
import Campaigns from '../../api/campaigns'


class Campaign extends Component {
  
  render() {
    if (!this.props.subscriptionReady)
      return (<p>Loading...</p>) // TODO: make a component for this
    // TODO: add not found error
    const campaign = this.props.campaign[0]
    return (
      <div id="Campaign">
        <CampaignItem key={campaign._id} campaign={campaign} />
      </div>
    )
  }
}

Campaign.propTypes = {
  campaign: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  subscriptionReady: PropTypes.bool,
}

export default createContainer((params) => {
  return {
    campaign: Campaigns.find().fetch(),
    subscriptionReady: FlowRouter.subsReady('campaign'),
    currentUser: Meteor.user(),
  }
}, Campaign)
