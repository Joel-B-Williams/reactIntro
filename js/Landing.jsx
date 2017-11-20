import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

const Landing = (props: {searchTerm: string}) =>
	<div className="landing">
		<Header />
		<input value={props.searchTerm} type="text" placeholder="Search" />
		<Link to="/search">or Browse All</Link>
	</div>;

// putting parens around the object tells react you're actually returning an object literal instead of declaring a function body
// this takes the full Redux state & pulls out only the part landing cares about (searchTerm).  Connected with connect below
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

//connect(<thing>) calls a function that runs on result of the param (Landing in this case)
export default connect(mapStateToProps)(Landing);
