import React from 'react';
import './Toolbar.scss';
import {Menu} from 'antd'

let Toolbar = () => {
	return (
		<div className="c-toolbar">

			<div className="logo" />

			<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={['2']}
			style={{ lineHeight: '64px' }}
			>
			<Menu.Item key="1">nav 1</Menu.Item>
			<Menu.Item key="2">nav 2</Menu.Item>
			<Menu.Item key="3">nav 3</Menu.Item>
			</Menu>

		</div>
		);
}

export default Toolbar;