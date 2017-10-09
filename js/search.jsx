import React, { Component } from 'react';
import Showcard from './showcard';
import preload from '../data';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: 'this is some sort of debug statement'
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
	*/

	handleSearchTermChange(event) {
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
					{preload.shows.map((show) => (<Showcard key={show.imdbID} {...show} />))}
				</div>
			</div>
		);
	}
}

export default Search;