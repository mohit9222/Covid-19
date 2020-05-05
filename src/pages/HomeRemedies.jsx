import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Row, Col } from 'reactstrap';
import styles from '/React/covid-19/src/App.module.css'
import Home_remedies from '../images/Home_remedies.PNG'
import Home_rem from '../images/Home_rem.jpg'
import Home_reme from '../images/Home_reme.jpg'

    class HomeRemedies extends Component {
      render() {
        return (
          <div className='remedies'>
            <Row>
            <Col sm="3"> 
            </Col>
            <Col sm="6"> 
            <img className='img' src={Home_remedies} style={{marginTop: '3%', marginBottom: '5%'}} alt="covid-19" />
            </Col>
            <Col sm="3"> 
            </Col>
            </Row>
            <Row>
            <Col sm="3"> 
            <div className="card card-cascade">
                <div className="view view-cascade overlay">
                 <img className="card-img-top" src={Home_reme} alt="Home Remedy" />
                 <a href="#!">
                 <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            <div className="card-body card-body-cascade text-center pb-0">
              <h4 className="card-title"><strong>Self-Care</strong></h4>
                  <p className="card-text" align="justify">Everyone should keep a healthy lifestyle at home.
                  Maintain a healthy diet, sleep, stay active, and make social contact with
                  loved ones through the phone or internet. Keep to regular routines
                  and schedules as much as possible.</p>
            </div>
            <div className="card-footer text-muted text-center mt-4">
            2 days ago
            </div>
            </div>
            </Col>
            <Col sm="6"> 
            <ReactPlayer
              url='https://www.youtube.com/watch?v=n0kDdM08hNE'
              className='react-player'
              playing
              width='100%'
              controls
            />
            </Col>
            <Col sm="3">
            <div className="card card-cascade">
                <div className="view view-cascade overlay">
                 <img className="card-img-top" src={Home_rem} alt="Home Remedy" />
                 <a href="#!">
                 <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            <div className="card-body card-body-cascade text-center pb-0">
              <h4 className="card-title"><strong>Care Tips</strong></h4>
                  <p className="card-text" align="justify">If you feel sick you should rest, 
                  drink plenty of fluid, and eat nutritious food. Stay in 
                  a separate room from other family members, and use a 
                  dedicated bathroom if possible. Clean and disinfect 
                  frequently touched surfaces.</p>
            </div>
            <div className="card-footer text-muted text-center mt-4">
            2 days ago
            </div>
            </div>
            </Col>
            
            </Row>
          </div>
        );
      }
    }

export default HomeRemedies
