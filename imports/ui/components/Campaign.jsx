import React from 'react';

class Campaign extends React.Component {
	render(){
		const campaign = this.props
		return (
			<ul className="campaign">
				<li className="campaign_name">{campaign.name}</li>
				<li className="campaign_owner">{campaign.owner}</li>
				<li className="campaign_restaurant">{campaign.restaurant}</li>
				<li className="campaign_deadline">{campaign.deadline}</li>
			</ul>
		);
	}
}

export default Campaign;