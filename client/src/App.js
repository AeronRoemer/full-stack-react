import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


//react components
import Header from './components/Header.js'
import PrivateRoute from './PrivateRoute.js'
import Home from './components/Home.js'
import Authenticated from './components/Authenticated.js'
import UserSignIn from './components/UserSignIn.js'
import UserSignUp from './components/UserSignUp.js'
import UserSignOut from './components/UserSignOut.js'
import NotFound from './components/NotFound.js'
//import Data retrieved from API with context
import withContext from './Context';
//fetch polyfill

//add context to components
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);

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
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  );
  };
}

export default App;