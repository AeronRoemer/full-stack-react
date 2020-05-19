import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './styles/reset.css';
import './styles/global.css';

//import Data retrieved from API
import Header from './components/Header.js'
import Home from './components/Home.js'
import UserSignIn from './components/UserSignIn.js'
import UserSignUp from './components/UserSignUp.js'
import NotFound from './components/NotFound.js'

import withContext from './Context';
//fetch polyfill

//add context to components
const HeaderWithContext = withContext(Header);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
class App extends Component {


    render(){  

  return (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  );
  };
}

export default App;

{/* <Route exact path="/" component={Public} />
<PrivateRoute path="/authenticated" component={AuthWithContext} />
<Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
         */}