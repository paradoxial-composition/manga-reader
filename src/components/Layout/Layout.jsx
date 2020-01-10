import React from 'react';
import './Layout.scss';
import {Layout} from 'antd';
import Toolbar from './Toolbar'
import _Footer from '../Footer/'

const { Header, Content, Footer } = Layout;

let _Layout = ({children, history}) => {
	return (
		<Layout>
			<Header>
				<Toolbar />
			</Header>
			<Content style={{ minHeight: '100vh' }}>
				{children}
			</Content>
			<Footer>
				<_Footer />
			</Footer>
		</Layout>
		);
}

export default _Layout;