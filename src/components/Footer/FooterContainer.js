import React from 'react';
import Footer from './Footer';

let FooterContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<Footer {...methods} />
	)
}

export default FooterContainer;