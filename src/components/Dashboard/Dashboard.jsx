import React from 'react';
import './Dashboard.scss';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;


let Dashboard = ({tempCards, componentItems, myItems, entryType}) => {

	myItems.forEach((element, index) => {
		if (element.type == entryType || entryType == 'all') {
			tempCards.push(
				<Col key={index} xs={{ span: 1, offset: 1 }} lg={{ span: 2, offset: 2 }}>
	
					<Card
						hoverable
						style={{ width: 240 }}
						cover={<img alt="example" src={element.cover} />}
					>
						<Meta title={element.title} description={Object.keys(element.details)[0] + ' ' + element.details[Object.keys(element.details)[0]]} />
	
						<a className="read-link">
						{(element.type == 'manga') ? 'Read Manga' : 'Watch Episode'}
						</a>
	
					</Card>
				</Col>
			)
		}
	});
	
	return (
			<div className="c-dashboard">
				<h1 className="head-title">{componentItems.headTitle}</h1>

				<div className="dashboard-content">
					<Row>
						{tempCards}
					</Row>
					
				</div>
				
			</div>
		);
}

export default Dashboard;