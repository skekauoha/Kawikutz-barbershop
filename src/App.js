import React from 'react';
import Nav from './features/nav/Nav';
import routes from './routes';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="header">
				<Nav />
			</div>
			<div className="routes">{routes}</div>
		</div>
	);
}

export default App;
