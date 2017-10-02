import React from 'react';
import Showcard from './showcard';
import preload from '../data';


const Search = () => (
	<div className='search'>
		{/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
			cool trick to preview data */}
		{preload.shows.map((show) => (<Showcard show={show} />))}
	</div>
);

export default Search;
