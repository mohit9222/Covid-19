import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './Navbar.css';
import covid from '../images/covid_img.png'
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
    <ReactBootStrap.Nav.Link href="#Covid-19"><i className="ion-ios-home" /> HOME</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/ProtectiveMeasures">
    <ReactBootStrap.Nav.Link href="#ProtectiveMeasures"><i className="ion-ios-megaphone" /> PROTECTIVE MEASURES</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/ImportantInformation">
    <ReactBootStrap.Nav.Link href="#ImportantInformation"><i className="ion-ios-briefcase" /> IMPORTANT INFORMATION</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/HomeRemedies">
    <ReactBootStrap.Nav.Link href="#HomeRemedies"><i class="icon ion-md-medkit" /> HOME REMEDIES</ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default ResponsiveNavigation