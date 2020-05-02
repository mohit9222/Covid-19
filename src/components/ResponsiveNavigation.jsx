import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './Navbar.css';
import covid from '../images/covid.jpg'
import {
    Link
  } from "react-router-dom";

const ResponsiveNavigation = () => {
    return(
        <div className="App" id="Navbar">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><img className='img' src={covid} alt="covid-19" /></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/Covid-19">
    <ReactBootStrap.Nav.Link href="#Covid-19"><i className="ion-ios-home" /> Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/ProtectiveMeasures">
    <ReactBootStrap.Nav.Link href="#ProtectiveMeasures"><i className="ion-ios-megaphone" /> Protective Measures</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/ImportantInformation">
    <ReactBootStrap.Nav.Link href="#ImportantInformation"><i className="ion-ios-briefcase" /> Important Information</ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default ResponsiveNavigation