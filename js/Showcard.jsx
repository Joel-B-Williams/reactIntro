//@flow

import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// returns a div that has been styled with the given css
// allows a component to be intrinsically linked to its own styling
// however is less efficient, and must be compiled "awkwardly" by browser, so it's cool but not mainstream (yet)
// this creates a class with the following css and gives the div that class (so at least it's not inline style)
const Wrapper = styled((Link: any))`
	width: 32%;
	border: 2px solid #333;
	border-radius: 4px;
	margin-bottom: 25px;
	padding-right: 10px;
	overflow: hidden;
	color: black;
	text-decoration: none;
`;

// now style.img for an image tag - just replace for any type of HTML tag you want
const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;
`;

	// <div className="showcard">
	// 	<div className="show-card">
class Showcard extends Component {
	// lifecycle method to tell component when to update
	shouldComponentUpdate(nextProps, nextState) {
		// we don't want a showcard to re-render (it's fully static) so just return false and it never will (after the first render) 
		return false;
	}
	// theoretical where you want component to update if it's rating props updates (and only then)
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.props.rating !== nextProps.rating;
	// }
	props: Show;
	render()
	{
		return (
			<Wrapper to={`/details/${this.props.imdbID}`}>
					<Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
					<div>
						<h3>
							{this.props.title}
						</h3>
						<h4>
							({this.props.year})
						</h4>
						<p>
							{this.props.description}
						</p>
					</div>
			</Wrapper>
		);
	};
} 
	// 	</div>
	// </div>;

// no longer need to declare separately when typing with flow
// Showcard.propTypes = {
// 	poster: string.isRequired,
// 	title: string.isRequired,
// 	year: string.isRequired,
// 	description: string.isRequired
// }

export default Showcard;
