import React from 'react';
import Dashboard from './Dashboard';


let DashboardContainer = (props) => {

	let componentItems = {
		headTitle: 'Recent Items'
	}

	let tempCards = []

	

	let methods = {
		...props,
		entryType: props.location.pathname.split('/')[1],
		componentItems,
		tempCards
	}
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;