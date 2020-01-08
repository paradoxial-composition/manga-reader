import React from 'react';
import Dashboard from './Dashboard';

import { Card } from 'antd'

let DashboardContainer = (props) => {
	let tempCards = []
	// let temp = [1, 2, 3 ,4]
	//  temp.forEach(element => {
		tempCards.push(
			<Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		)
	// });

	let methods = {
		...props,
		tempCards
	}
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;