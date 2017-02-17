import React from 'react';

class Campaign extends React.Component {
	render(){
		const campaign = this.props
		return (
			<ul>
				<li>{campaign.name}</li>
				<li>{campaign.owner}</li>
				<li>{campaign.restaurant}</li>
			</ul>
		);
	}
}

export default Campaign;