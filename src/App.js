import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import OregonMap from './OregonMap.js';
import Home from './Home.js';
import ChartTemplate from './ChartTemplate.js';
import SliderYear from './SliderYear.js'
import SignUp from './SignUp.js';
import Login from './Login.js';
import Welcome from './Welcome.js';
// import ArticleTester from './ArticleTester.js'
// -----------------------------------------------------------------------------------
export default class App extends Component {

  state = {
    username: localStorage.getItem('USERNAME') || '',
    token: localStorage.getItem('TOKEN') || '',
  }

  // -----------------------------------------------------------------------------------

  setTokenAndName = (username, token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('USERNAME', username);

    this.setState({
      username: username,
      token: token
    })
  }

  // -----------------------------------------------------------------------------------

  logOut = () => {
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('USERNAME', '');

    this.setState({
      username: '',
      token: ''
    })

  }

  // -----------------------------------------------------------------------------------

  render() {
    return (
      <div className="body">
        <Router>

          {/* ----------------------------------------------------------------------------------------- */}


          <Switch>

            <Route
              path="/"
              exact
              render={(routerProps) => <Welcome {...routerProps} />}
            />

            <Route
              path="/Home"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />

            <Route
              path="/mapchart"
              exact
              render={(routerProps) => <OregonMap {...routerProps} />}
            />

            <Route
              path="/tempchart"
              exact
              render={(routerProps) => <ChartTemplate {...routerProps} />}
            />
            <Route
              path="/slider"
              exact
              render={(routerProps) => <SliderYear {...routerProps} />}
            />

            {/* <Route
              path="/articletest"
              exact
              render={(routerProps) => <ArticleTester {...routerProps} />}
            /> */}
            <Route
              path='/signup'
              exact
              render={
                (routerProps) =>
                  <SignUp
                    {...routerProps}
                    setTokenAndName={this.setTokenAndName}
                  />
              }
            />

            <Route exact path='/login' render={(routerProps) =>
              <Login {...routerProps}
                setTokenAndName={this.setTokenAndName}
              />}
            />

          </Switch>

          {/* ------------------------------------------------------------------------------------------ */}

        </Router>
      </div >
    )
  }
}