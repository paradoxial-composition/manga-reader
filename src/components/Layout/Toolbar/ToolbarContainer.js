import React from 'react';
import Toolbar from './Toolbar';

let ToolbarContainer = (props) => {
	let componentItems = {
		tabs: [
			{
				path: '/manga',
				label: 'Mangas',
				icon: 'book'
			},
			{
				path: '/anime',
				label: 'Animes',
				icon: 'video-camera'
			},
			{
				path: '/scheldule',
				label: 'Scheldule',
				icon: 'calendar'
			},
			{
				path: '/all',
				label: 'All',
				icon: 'star'
			},
		]
	}
	let methods = {
		componentItems,
		...props
	}
	return (
		<Toolbar {...methods} />
	)
}

export default ToolbarContainer;