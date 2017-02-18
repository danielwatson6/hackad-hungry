import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'


class CampaignItem extends Component {
	
	uri() {
		return '/campaign/' + this.props.campaign._id
	}
	
	render() {
		const campaign = this.props
		return (
			<a href={this.uri()} className="CampaignItem">
				<h5 className="mb-0">{this.props.campaign.name}</h5>
			</a>
		)
	}
}

export default createContainer(() => {
	return {
		currentUser: Meteor.user(),
	}
}, CampaignItem)
