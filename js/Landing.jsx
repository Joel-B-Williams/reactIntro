import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import { setSearchTerm } from './actionCreators';

const Landing = (props: {searchTerm: string, handleSearchTermChange: Function}) =>
	<div className="landing">
		<h1>{props.searchTerm || 'svideo'}</h1>
		<input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
		<Link to="/search">or Browse All</Link>
	</div>;

// putting parens around the object tells react you're actually returning an object literal instead of declaring a function body
// this takes the full Redux state & pulls out only the part landing cares about (searchTerm).  Connected with connect below
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

// creates functions to dispatch events to Redux (so it can update its store)
// returns an object that will be injected as props into Landing
// passes event.target.value into setSearchTerm, which formats that into an action (see actionCreators.js) of type SET_SEARCH_TERM
const mapDispatchToProps = (dispatch: Function) => ({
	handleSearchTermChange(event) {
		dispatch(setSearchTerm(event.target.value));
	}
});

//connect(<thing>) calls a function that runs on result of the param (Landing in this case) - injects results so they can be used as props
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
