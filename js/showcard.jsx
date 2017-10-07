import React from 'react';
import { shape, string } from 'prop-types';

const Showcard = props =>
	<div className="showcard">
		<div className="show-card">
			<img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
			<div>
				<h3>
					{props.title}
				</h3>
				<h4>
					({props.year})
				</h4>
				<p>
					{props.description}
				</p>
			</div>
		</div>
	</div>;

Showcard.propTypes = {
	poster: string.isRequired,
	title: string.isRequired,
	year: string.isRequired,
	description: string.isRequired
}

export default Showcard;
