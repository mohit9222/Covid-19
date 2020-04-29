import React from 'react';
import { Router } from '@reach/router'
import Home from './pages/Home.jsx'
import ProtectiveMeasures from '../src/pages/ProtectiveMeasures'
import ImportantInformation from './pages/ImportantInformation'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import logo from './covid.jpg';
import './App.css';

function App() {
  const navLinks = [
		{
			text: 'Home',
			path: '/Covid-19',
			icon: 'ion-ios-home'
		},
		{
			text: 'Protective Measures',
			path: '/ProtectiveMeasures',
			icon: 'ion-ios-megaphone'
		},
		{
			text: 'Important Information',
			path: '/ImportantInformation',
			icon: 'ion-ios-briefcase'
		}
	]

	return (
		<div className="App">
			<ResponsiveNavigation
				navLinks={ navLinks }
				logo={ logo }
				background="#fff"
				hoverBackground="#ddd"
				linkColor="#777"
			/>
			<Router>
				<Home path="/Covid-19" />
				<ProtectiveMeasures path="/ProtectiveMeasures" />
				<ImportantInformation path="/ImportantInformation" />
			</Router>
		</div>
	);
}

export default App;