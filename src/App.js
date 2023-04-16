import logocar from './logocar.png'
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

function App() {
  return (
    <div className="App">
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
      </div>
      <header className="App-header">
     

      </header>
      <footer className="App-footer">
        
          <div className="row gy-1" style={{ display: "flex", justifyContent: "space-between", paddingTop: "50px" }}>
            <div className="col-lg-2">
              <img src={logo} className="App-logo" alt="logo" />
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

    
        <a 
          className="Footer-link"
          href="https://tiagocarleial.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          tiagocarleial@gmail.com
        </a>
   
      </footer>
    </div>
  );
}

export default App;
