import React, { Component } from 'react'

class Footer extends Component {
    render () {
        return (
        <div>
            <footer className="footer" style={{position:"relative",bottom:'0',width:"100%",height:'40px', 
            background:'rgb(222, 222, 222)', clear: 'both'}}>
            <div className="container">
             <span className="text-muted">&copy; 30C WHO</span>
            </div>
            </footer>
        </div>
        )
    }

}

export default Footer