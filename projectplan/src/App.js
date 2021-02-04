import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" component={ Dashboard }></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
