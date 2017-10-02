import React from 'react';
import { render } from 'react-dom';
import preload from '../data';

const Search = () => (
	<div className='search'>
		{/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
			cool trick to preview data */}
		{preload.shows.map((show) => (
			<div className='show-card'>
				<img alt={`${show.title} Show Poster`} src={`/public/img/posters/${show.poster}`} />
				<div>
					<h3>{show.title}</h3>
					<h4>({show.year})</h4>
					<p>{show.description}</p>
				</div>
			</div>
		))}
	</div>
);

export default Search;
