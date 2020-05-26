import React, { Component } from 'react'
import image from '../images/imp.PNG'
import styles from '/React/covid-19/src/App.module.css'
import { Jumbotron } from 'reactstrap';

class ImportantInformation extends Component {
   render() {
       return (
        <div>    
    <div style={{paddingLeft: "10%", paddingRight: "10%", paddingTop: '3%'}}>
      <Jumbotron>
        <h3 className="display-5" style={{textAlign: "justify", textAlignLast: "left"}}>If you have fever, cough and difficulty breathing, seek medical care early</h3>
        <p className="lead" style={{textAlign: "justify", textAlignLast: "left"}}>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek 
        medical attention and call in advance. Follow the directions of your local health authority.</p>
        <hr className="my-2" />
        <p style={{textAlign: "justify", textAlignLast: "left"}}><b>Why?</b> National and local authorities will have the most up to date information on the situation in your area.
           Calling in advance will allow your health care provider to quickly direct you to the right health facility. 
           This will also protect you and help prevent spread of viruses and other infections.</p>


        <h3 className="display-5" style={{textAlign: "justify", textAlignLast: "left"}}>Protection measures for persons who are in or have recently visited (past 14 days) areas
        where COVID-19 is spreading</h3>
        <p className="lead" style={{textAlign: "justify", textAlignLast: "left"}}>1. Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight 
        runny nose, until you recover. Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect
        you and others from possible COVID-19 and other viruses.</p>
        <p className="lead" style={{textAlign: "justify", textAlignLast: "left"}}>2. If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may 
        be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers. Why? Calling in advance
        will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.</p>
        <hr className="my-2" />

      </Jumbotron>
    </div>
        </div>
       )

   }
}

export default ImportantInformation