// @flow

import React, { Component } from 'react';
import Showcard from './showcard';
import preload from '../data';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		};
		// these bind the function to this component - can be done where function is called in render, technically, but then it's called any time you render (aka a lot) and that is horribly inefficient & resourse wasteful
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	/* 
	 alternative to constructor(props) function... 
	 
	 class Search extends Component {
		 state = {
			 searchTerm: ''
		 };
		 handleSearchTermChange = event => {
			 this.setState({ searchTerm: event.target.value });
		 };

		 ... stuff... 

		}
		NOTE -> no bind called in class definition
	  - Does not need to accept props because this is actually using default React Constructor, which takes them by default
		- Works because arrow functions do not create a new context, so there is no new 'this', and no need to bind to context of the class
	*/

	handleSearchTermChange(event: SyntheticKeyboardEvent & {target: HTMLInputElement}) {
		this.setState({ searchTerm: event.target.value })
	}

	render() {
		return (
			<div className='search'>
				<header>
					<h1>svideo</h1>
					<input
						onChange={this.handleSearchTermChange}
						type='text'
						value={this.state.searchTerm}
						placeholder='Search'
					/>
				</header>
				{/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
cool trick to preview data */}
				<div>
					{preload.shows
						.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
						.map((show) => (<Showcard key={show.imdbID} {...show} />))}
				</div>
			</div>
		);
	}
}

export default Search;