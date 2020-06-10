import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


//react components
import Header from './components/Header.js'
import PrivateRoute from './PrivateRoute.js'
import HomeSubHeader from './components/HomeSubHeader.js'
import Authenticated from './components/userFunctionality/Authenticated.js'
import UserSignIn from './components/userFunctionality/UserSignIn.js'
import UserSignUp from './components/userFunctionality/UserSignUp.js'
import UserSignOut from './components/userFunctionality/UserSignOut.js'
import RandomFour from './components/courseDisplay/RandomFour.js'
import NotFound from './components/NotFound.js'
//import Data retrieved from API with context
import withContext from './Context';
//fetch polyfill

//add context to components
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const HomeSubHeaderWithContext = withContext(HomeSubHeader);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const RandomFourWithContext = withContext(RandomFour)

class App extends Component {

  
    render(){  
  return (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <PrivateRoute path="/authenticated" component={AuthWithContext} />
        <Route path="/home" component={HomeSubHeaderWithContext} />
        <Route exact path="/" component={() => (
          <div>
          <HomeSubHeaderWithContext />
          <RandomFourWithContext />
          </div>
          )} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  );
  };
}

export default App;