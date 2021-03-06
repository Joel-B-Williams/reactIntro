// @flow
import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';
// functional component, no 'this.props...', just props...
const Header = (props: 
	{ 
		showSearch?: boolean,
		handleSearchTermChange: Function,
		searchTerm: String
	}) => {
	let utilSpace;
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
	showSearch: false
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
	handleSearchTermChange (event) {
		dispatch(setSearchTerm(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);