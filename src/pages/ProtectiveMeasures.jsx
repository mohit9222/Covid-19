import React, { Component } from 'react'
import image from '../images/Protective.PNG'
import styles from '../App.module.css';
import { UncontrolledCollapse, Card, CardBody, Button,   Row, Col } from 'reactstrap';

class ProtectiveMeasures extends Component {
    render () {
        return (
        <div>    
            <img className={styles.Protective} src={image} alt="Protective Measures" />
        <div className="section_one">
            <Row>
            <Col sm="4">
            </Col>
            <Col sm="4"> 
                <Button color="primary" id="hands" style={{ marginTop: '1rem', width: '70%' }}>
                Wash Your hands frequently
                </Button>
                <UncontrolledCollapse toggler="#hands" style={{ marginTop: '1rem'}}>
                <Card>
                    <CardBody>
                    <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub 
                    or wash them with soap and water.<br />
                    <b>Why?</b> Washing your hands with soap and water or using alcohol-based hand 
                    rub kills viruses that may be on your hands.</p>
                    </CardBody>
                </Card>
                </UncontrolledCollapse>  
            </Col>   
            <Col sm="4">
            </Col>
            </Row>
        </div>
        <div className="section_two">
            <Row>
            <Col sm="4">
            </Col>
            <Col sm="4">
            <Button color="danger" id="distancing" style={{ marginTop: '1rem', width: '70%' }}>
                    Social Distancing
                </Button>
                <UncontrolledCollapse toggler="#distancing" style={{ marginTop: '1rem'}}>
                <Card>
                    <CardBody>
                    <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.<br />
                    <b>Why?</b> When someone coughs or sneezes they spray small liquid droplets from their nose or mouth
                    which may contain virus. If you are too close, you can breathe in the droplets, including the 
                    COVID-19 virus if the person coughing has the disease.</p>
                    </CardBody>
                </Card>
                </UncontrolledCollapse>  
            </Col> 
            <Col sm="4">
            </Col>
            </Row>
        </div> 
        <div className="section_three">
            <Row>
            <Col sm="4">
            </Col>
            <Col sm="4">
            <Button color="success" id="face" style={{ marginTop: '1rem', width: '70%' }}>
                Avoid Touching your Face
            </Button>
            <UncontrolledCollapse toggler="#face" style={{ marginTop: '1rem'}}>
            <Card>
                <CardBody>
                <p><b>Why?</b> Hands touch many surfaces and can pick up viruses. Once contaminated, hands can
                transfer the virus to your eyes, nose or mouth. From there, the virus can enter your
                body and can make you sick.</p>
                </CardBody>
            </Card>
            </UncontrolledCollapse>  
            </Col> 
            <Col sm="4">
            </Col>
            </Row>
        </div> 
        <div className="section_four">
            <Row>
            <Col sm="4">
            </Col>
            <Col sm="4">
            <Button id="Hygines" style={{ backgroundColor: '#333', borderColor: '#333', marginTop: '1rem', width: '70%' }}>
            Practicing Respiratory Hygines
            </Button>
            <UncontrolledCollapse toggler="#Hygines" style={{ marginTop: '1rem'}}>
            <Card>
                <CardBody>
                <p>Make sure you, and the people around you, follow good respiratory hygiene.
                This means covering your mouth and nose with your bent elbow or tissue when
                you cough or sneeze. Then dispose of the used tissue immediately.<br />
                <b>Why?</b> Droplets spread virus. By following good respiratory hygiene you 
                protect the people around you from viruses such as cold, flu and COVID-19.</p>
                </CardBody>
            </Card>
            </UncontrolledCollapse>
            </Col> 
            <Col sm="4">
            </Col>
            </Row>
        </div> 
    </div>
        )
    }
}

export default ProtectiveMeasures