import React from 'react';
import Showcard from './showcard';
import preload from '../data';


const Search = () => (
	<div className='search'>
		<header>
			<h1>svideo</h1>
			<input type='text' placeholder='Search' />
		</header>
		{/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
			cool trick to preview data */}
		<div>
			{preload.shows.map((show) => (<Showcard key={show.imdbID} {...show} />))}
		</div>
	</div>
);

export default Search;
