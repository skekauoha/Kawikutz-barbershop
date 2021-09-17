import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../nav/kawikutz-logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<Grid container>
			<Grid item xs={2} alignItems="center">
				<Link to="/">
					<img src={logo} alt="Kawikutz" />
				</Link>
			</Grid>
			<Grid item xs={2} alignItems="center" style={{ backgroundColor: 'red' }}>
				<Link to="/story">
					<p>Our Story</p>
				</Link>
			</Grid>
			<Grid item xs={2} alignItems="center" style={{ backgroundColor: 'orange' }}>
				<Link to="/services">
					<p>Services</p>
				</Link>
			</Grid>
			<Grid item xs={2} alignItems="center" style={{ backgroundColor: 'salmon' }}>
				<Link to="/portfolio">
					<p>Portfolio</p>
				</Link>
			</Grid>
			<Grid item xs={2} alignItems="center" style={{ backgroundColor: 'pink' }}>
				<Link to="/appointment">
					<p>Appointment</p>
				</Link>
			</Grid>
		</Grid>
	);
};

export default Nav;
