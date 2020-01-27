import React from 'react';
import './Toolbar.scss';
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'antd'

let Toolbar = ({componentItems}) => {

	let tabs = []
	
	componentItems.tabs.map( (item,index) => {
		tabs.push(
			<Menu.Item key={index}>
			<Link to={item.path} />
				<Icon type={item.icon}/>
				{' ' + item.label}
			</Menu.Item>
		)
	})

	return (
		<div className="c-toolbar" >

			<div className="logo" />

			<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={['0']}
			style={{ lineHeight: '64px' }}
			>
				{tabs}
			</Menu>

		</div>
		);
}

export default Toolbar;