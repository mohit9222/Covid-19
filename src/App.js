import React from 'react';
import Home from './pages/Home.jsx'
import ProtectiveMeasures from '../src/pages/ProtectiveMeasures'
import ImportantInformation from './pages/ImportantInformation'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import HomeRemedies from './pages/HomeRemedies'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
			<ResponsiveNavigation />
	
			{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
			<Switch>
			<Route path="/Covid-19" component={Home}>
              <Home />
          	</Route>
			<Route path="/ProtectiveMeasures" component={ProtectiveMeasures}>
              <ProtectiveMeasures />
          	</Route>
			<Route path="/ImportantInformation" component={ImportantInformation}>
              <ImportantInformation />
          	</Route>
			<Route path="/HomeRemedies" component={HomeRemedies}>
              <HomeRemedies />
          	</Route>
			</Switch>
			</Router>
		</div>
	);
}


export default App;