import React from 'react';
import './Dashboard.scss';


let Dashboard = ({tempCards}) => {

	
	return (
			<div className="c-dashboard">
				<h1>Dashboard</h1>
				
				{tempCards}
			</div>
		);
}

export default Dashboard;