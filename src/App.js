import React from 'react';

import Header from "./components/Header";
import Home from "./components/Home"
import Detail from "./components/Detail"
import Login from "./components/Login"
import Detailsm from './components/Detailsm';
import Detailshe from './components/Detailshe';
import Detailsmo from './components/Detailsmo';
import Detailsmickey from './components/Detailsmickey';
import Detailsnow from './components/Detailsnow';
import Detailsenc from './components/Detailsenc';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detailsfrozen from './components/Detailsfrozen';
import Detailspoca from './components/Detailspoca';


import { Navigate, Outlet } from 'react-router-dom';
import Detailstangled from './components/Detailstangled';
import Detailslittle from './components/Detailslittle';
import Detailcin from './components/Detailcin';



function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Switch>
         
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/detailsenchanto'>
            <Detailsenc />
          </Route>

          <Route path='/detailsmulan'>
            <Detailsm />
          </Route>
          <Route path='/detailshercules'>
            <Detailshe />
          </Route>
          <Route path='/detailsmickey'>
            <Detailsmickey />
          </Route>          
          <Route path='/detailsmoana'>
            <Detailsmo />
          </Route>
          <Route path='/detailsfrozen'>
            <Detailsfrozen />
          </Route>
          <Route path='/detailspocahontas'>
            <Detailspoca />
          </Route>
          <Route path='/detailsnowhite'>
            <Detailsnow />
          </Route>
          <Route path='/detailstangled'>
            <Detailstangled />
          </Route>
          <Route path='/detailslittlemermaid'>
            <Detailslittle />
          </Route>
          <Route path='/detailscinderella'>
            <Detailcin />
          </Route>
          <Route path="/" component={Home} />
          
          
        </Switch>

      </Router>
         

    </div>
    

    

  )
}

export default App;



