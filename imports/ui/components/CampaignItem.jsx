import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'


class CampaignItem extends Component {

	uri() {
		return '/campaign/' + this.props.campaign._id
	}

	getRestaurantInfo() {
		return
	}

	render() {
		const restaurantInfo = this.getRestaurantInfo()
		return (
			<a href={this.uri()} className="CampaignItem">
				<h5>{this.props.campaign.name}</h5>
			</a>
		)
	}
}

export default createContainer(() => {
	return {
		currentUser: Meteor.user(),
	}
}, CampaignItem)
