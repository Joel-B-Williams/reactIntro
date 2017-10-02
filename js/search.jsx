import React from 'react';
import { render } from 'react-dom';
import preload from '../data';

const Search = () => (
	<div className='search'>
		{/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
			cool trick to preview data */}
		{preload.shows.map((show) => <h3>{show.title}</h3>)}
	</div>
	)

export default Search;
