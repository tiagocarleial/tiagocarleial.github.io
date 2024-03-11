import React from 'react';
import logocar from '../logocar.png';
import './Header.css'

function Header() {
    return (
    
        <div className="container">
            <div className="row" id="row-header">
                <div className="col-lg-2">
                    <img src={logocar} className="App-logocar" alt="logo" />
                </div>
                <div className="col-lg-8"></div>
                <div className="col-lg-2 text-end">
                    <a href="https://github.com/tiagocarleial" className="App-link" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </div>
            </div>
            <div className='App-header'></div>
        </div>
    );
}

export default Header;
