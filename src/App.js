import logo from "./logo.svg";
import "./App.css";

import "./styles.css";
import Main from "./Main/Main";
import Authors from "./Main/Authors";
import Scans from "./Main/Scans";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             <img src={logo} className="App-logo" alt="logo" />
    //             <p>
    //                 Edit <code>src/App.js</code> and save to reload.
    //             </p>
    //             <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //                 Learn React
    //             </a>
    //         </header>
    //     </div>
    // );
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main">
              <Route path="authors" element={<Authors />}>
                <Route path=":id" element={<Authors />} />
              </Route>
              <Route path="scans" element={<Scans />}>
                <Route path=":id" element={<Scans />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
