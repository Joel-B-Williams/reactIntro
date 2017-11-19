import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const Landing = () =>
	<div className="landing">
		<Header />
		<input type="text" placeholder="Search" />
		<Link to="/search">or Browse All</Link>
	</div>;

export default Landing;
