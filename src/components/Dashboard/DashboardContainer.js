import React from 'react';
import Dashboard from './Dashboard';
import { Col } from 'antd';

import { Card, Button,Anchor } from 'antd'
const { Link } = Anchor

let DashboardContainer = (props) => {
	let tempCards = []
	let temp = [1, 2, 3 ,4]
	 temp.forEach(element => {
		tempCards.push(
			<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
				<Card hoverable bordered={false} key="1" title="Default size card" extra={<a href="#">More</a>} className="dashboard-element-card">
					<p>Card content</p>
					<p>Card content</p>
					<Button type="primary">Hello there traveler !</Button>
					<Anchor>
						<Link title="Hello Hello" />
					</Anchor>
				</Card>
			</Col>
		)
	});

	let methods = {
		...props,
		tempCards
	}
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;