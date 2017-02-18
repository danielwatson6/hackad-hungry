import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import CampaignItem from './CampaignItem'
import CampaignsCollection from '../../api/campaigns'


const test = () => {
  console.log(CampaignsCollection.find().fetch())
  return CampaignsCollection.find().fetch()
}

class Campaigns extends Component {
	
  renderCampaigns() {
    const result = []
    for (campaign of this.props.campaigns)
      result.push(<CampaignItem key={campaign._id} campaign={campaign} />)
    return result
  }
  
	render() {
		return (
			<div id="Campaigns">
				{this.renderCampaigns()}
			</div>
		)
	}
}

Campaigns.propTypes = {
	campaigns : PropTypes.array.isRequired,
	currentUser: PropTypes.object,
}

export default createContainer(() => {
	return {
		// TODO: fetch from collection
		campaigns: test(),
		currentUser: Meteor.user(),
	}
}, Campaigns)
