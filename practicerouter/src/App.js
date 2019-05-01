import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';


class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
            <div>
              <NavLink exact to="/" activeClassName="selected" activeStyle={{color: "red"}}> Home </NavLink>
              <NavLink to="/history" activeClassName="selected" activeStyle={{color: "red"}}> History </NavLink>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/history" component={History} />
            </Switch>
            </div>
          </BrowserRouter>
      );
  }
}

export default App;
