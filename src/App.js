import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './features/portfolio/Header'
import Main from './features/portfolio/Main'
import Footer from './features/portfolio/Footer'
import Portfolio from './features/portfolio/Portfolio';


function App() {
  return (
    <div>
      <Header/>
        <Router>
          <Switch>
            <Route exact path="/"> 
              <Main/> 
            </Route>
              <Portfolio exact path="/portfolio/:id"/>
            </Switch>
       </Router>
      <Footer/>
    </div>
  )
}

export default App;
