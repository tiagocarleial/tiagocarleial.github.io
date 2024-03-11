
import logo from './logo.svg';
import logoangular from './logoangular.png';
import logogit from './logogit.png';
import logotype from './logotype.png';
import logospring from './logospring.png';
import logojavascript from './logojavascript.png';
import logohtml from './logohtml.png';
import logocss from './logocss.png';
import logosql from './logosql.png';
import logopostgres from './logopostgres.png';
import logojasper from './logojasper.png';
import logodocker from './logodocker.png';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import React, { useState } from 'react';
import ReactDialog from './react-dialog/ReactDialog';

function App() {

  const [dialogVisible, setDialogVisible] = useState(false);

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <div className="card-container">
          <h2>Experience</h2>
          <div className="row gy-1" style={{ display: "flex", justifyContent: "space-between", paddingTop: "50px", paddingBottom: "30px" }}>
          <div className="col-lg-2 icon-container">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="icon-overlay" onClick={() => openDialog('React')}>
              <span className='icon-text'>More</span>
            </div>
          </div>
            <div className="col-lg-2">
              <img src={logoangular} className="App-logoangular" alt="logoangular" />
            </div>
            <div className="col-lg-2">
              <img src={logogit} className="App-logogit" alt="logogit" />
            </div>
            <div className="col-lg-2">
              <img src={logotype} className="App-logotype" alt="logotype" />
            </div>
            <div className="col-lg-2">
              <img src={logospring} className="App-logospring" alt="logospring" />
            </div>
            <div className="col-lg-2">
              <img src={logojavascript} className="App-logojavascript" alt="logojavascript" />
            </div>
          </div>

          <div className="row gy-1" style={{ display: "flex", justifyContent: "space-between", paddingBottom: "30px" }}>
            <div className="col-lg-2">
              <img src={logohtml} className="App-logohtml" alt="logohtml" />
            </div>
            <div className="col-lg-2">
              <img src={logocss} className="App-logocss" alt="logocss" />
            </div>
            <div className="col-lg-2">
              <img src={logosql} className="App-logosql" alt="logosql" />
            </div>
            <div className="col-lg-2">
              <img src={logopostgres} className="App-logopostgres" alt="logopostgres" />
            </div>
            <div className="col-lg-2">
              <img src={logojasper} className="App-logojasper" alt="logojasper" />
            </div>
            <div className="col-lg-2">
              <img src={logodocker} className="App-logodocker" alt="logodocker" />
            </div>
          </div>
          
        </div>

      </main>
      {dialogVisible && <ReactDialog closeDialog={closeDialog} />}
      
      <Footer />
    </div>
  );
}

export default App;
