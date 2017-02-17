import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import CampaignItem from './CampaignItem'


// Dummy data for testing while database is unavailable
const dummyCampaigns = [
  {
    _id: 1,
    name: 'somename',
    owner: 'owner1',
    deadline: 'somedeadline',
    restaurant: 'somerestaurant',
    status: 'isOpen',
  },
  {
    _id: 2,
    name: 'somename2',
    owner: 'owner2',
    deadline: "somedeadline2",
    restaurant: 'somerestaurant2',
    status: 'isOpen',
  },
  {
    _id: 3,
    name: 'somename3',
    owner: 'owner3',
    deadline: "somedeadline3",
    restaurant: 'somerestaurant3',
    status: 'isOpen',
  },
  {
    _id: 4,
    name: 'somename4',
    owner: 'owner4',
    deadline: "somedeadline4",
    restaurant: 'somerestaurant4',
    status: 'isOpen',
  },
]


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
		campaigns: dummyCampaigns,
		currentUser: Meteor.user(),
	}
}, Campaigns)
