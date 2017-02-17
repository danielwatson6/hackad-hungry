import React from 'react';
import Campaign from './Campaign';
//the component for displaying campaign listview
//an array of campaigns should be passed in
const Campaigns = (props) => {
	return(
		<div className="Compaigns">
			<ul>
			{props.campaigns.map((campaign)=>{
				return(
				<li key={campaign.id}>
					<Campaign  {...campaign}/>
				</li>
				);
			}
			)
		}
			</ul>
		</ div>
	);
	
};

Campaigns.propTypes = {
	campaigns : React.PropTypes.array
};

export default Campaigns;