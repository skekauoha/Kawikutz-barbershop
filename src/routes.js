import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Story from './features/story/Story';
import Services from './features/services/Services';
import Portfolio from './features/portfolio/Portfolio';
import Appointment from './features/appointment/Appointment';

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/story" component={Story} />
		<Route path="/services" component={Services} />
		<Route path="/portfolio" component={Portfolio} />
		<Route path="/appointment" component={Appointment} />
	</Switch>
);
