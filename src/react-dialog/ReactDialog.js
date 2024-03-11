// ReactDialog.js
import React from "react";
import './React.css';
import logo from '../logo.svg';

function ReactDialog({ closeDialog }) { 
  return ( 
    <div className="dialog-background">
      <div className="dialog-content">
        <div className="col-lg-2">
          <img src={logo} className="logospring" alt="logospring" />
        </div>
        <h3>Knowledge in React and Node.js</h3> 
        <h4>Projects with React: </h4>

        <span> 
          <a href="https://github.com/tiagocarleial" className="App-link" target="_blank" rel="noopener noreferrer">tiagocarleial.github.io</a>
        </span>
        <br />
        <span>
          <a href="https://github.com/tiagocarleial/tiagocarleial.github.io" className="App-link" target="_blank" rel="noopener noreferrer"> - https://github.com/tiagocarleial/tiagocarleial.github.io</a>
        </span>
        <br />
        <br />
        <div className="close-button">
          <button onClick={closeDialog}>Close</button>
      </div>
      </div>
      
      
    </div>
  );
}

export default ReactDialog;
