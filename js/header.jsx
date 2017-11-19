// @flow
import React from 'react'
import { Link } from 'react-router-dom';
// functional component, no 'this.props...', just props...
const Header = (props: 
	{ 
		showSearch?: boolean,
		handleSearchTermChange?: Function,
		searchTerm?: String
	}) => {
	let utilSpace
	if (props.showSearch){
		utilSpace = (
			<input
				onChange={props.handleSearchTermChange}
				type='text'
				value={props.searchTerm}
				placeholder='Search'
			/>
		);
	} else {
		utilSpace = (
			<h2>
				<Link to='/search'>
					Back
				</Link>
			</h2>
		);
	}
	return (
		<header>
			<h1>
				<Link to='/'>
					svideo
				</Link>
			</h1>
			{utilSpace}
		</header>
	);
};

Header.defaultProps = {
	showSearch: false,
	handleSearchTermChange: function noop () {},
	searchTerm: ''
}

export default Header;