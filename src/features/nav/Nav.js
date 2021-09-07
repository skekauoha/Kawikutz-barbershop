import React from 'react';
import Box from '@material-ui/core/Box';

const Nav = () => {
	return (
		<div style={{ width: '100%' }}>
			<Box display="flex" justifyContent="space-around" m={1} p={1}>
				<Box p={1}>Our Story</Box>
				<Box p={1}>Services</Box>
				<Box p={1}>Portfolio</Box>
				<Box p={1}>Appointment</Box>
			</Box>
		</div>
	);
};

export default Nav;
