import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type {RouterHistory} from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {
	props: {
		searchTerm: string, 
		handleSearchTermChange: Function,
		history: RouterHistory
	};
// route components have access to history, for others you'd have to specifically ask for access to context (it's hidden by default)
	goToSearch = (event: SyntheticEvent) => 
	{
		event.preventDefault();
		this.props.history.push('/search');
	}

	render()
	{
		return (
			<div className="landing">
				<h1>svideo</h1>
				<form onSubmit={this.goToSearch}>
					<input 
						onChange={this.props.handleSearchTermChange} 
						value={this.props.searchTerm} 
						type="text" 
						placeholder="Search" 
					/>
				</form>
				<Link 
					to="/search"
					onClick={clearSearch()} 
				>
					or Browse All
				</Link>
			</div>
		);
	};
} 


//NOTE neither of these are specific built-in-methods.  Just constant names.
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

// Dispatch function used on button click - not 'connected' (that only takes the two read/set functions)
const clearSearch = (dispatch: Function) => ({
	handleSearchTermChange() {
		dispatch(setSearchTerm(''));
	}
});

//connect(<thing>) calls a function that runs on result of the param (Landing in this case) - injects results so they can be used as props
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
