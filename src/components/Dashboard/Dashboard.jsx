import React from 'react';
import './Dashboard.scss';
import { Row } from 'antd';


let Dashboard = ({tempCards}) => {

	
	return (
			<div className="c-dashboard">
				<h1>Dashboard</h1>

				<div className="dashboard-content">
					<Row>
						{tempCards}
					</Row>
					
				</div>
				
			</div>
		);
}

export default Dashboard;