import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './Navbar.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {
    Link
  } from "react-router-dom";

const ResponsiveNavigation = () => {
    return(
        <div className="App" id="Navbar">
           <div>
          <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="dark">
<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
 <ReactBootStrap.Nav className="mr-auto">
   <Link to="/Covid-19">
    <ReactBootStrap.Nav.Link href="#Covid-19"><i className="ion-ios-home" /> Global Details</ReactBootStrap.Nav.Link>
   </Link>
   <Link to="/IndiaDetails">
    <ReactBootStrap.Nav.Link href="#IndiaDetails"><i className="ion-ios-home" /> India Details</ReactBootStrap.Nav.Link>
   </Link>
   <Link to="/ProtectiveMeasures">
    <ReactBootStrap.Nav.Link href="#ProtectiveMeasures"><i className="ion-ios-megaphone" /> Protective Measures</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/ImportantInformation">
    <ReactBootStrap.Nav.Link href="#ImportantInformation"><i className="ion-ios-briefcase" /> Important Info</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/HomeRemedies">
    <ReactBootStrap.Nav.Link href="#HomeRemedies"><i class="icon ion-md-medkit" /> Home Remedies</ReactBootStrap.Nav.Link>
    </Link>
   </ReactBootStrap.Nav>
   </ReactBootStrap.Navbar.Collapse>
   </ReactBootStrap.Navbar></div>
          <Jumbotron className="Head">
         
            <div>
            <h1 style={{color: "white", textAlign:"justify"}}>Covid - 19</h1>
            <p style={{textAlign:"justify"}}>
              <i style={{color: "white"}}>"Ultimately, the greatest lesson that COVID-19 can teach humanity
               is that we are all in this together."</i>
            </p>
            </div>
          </Jumbotron>
        </div>
    )
}

export default ResponsiveNavigation