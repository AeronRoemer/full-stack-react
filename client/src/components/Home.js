import React from 'react';
import Subheader from './Subheader.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NotFound from './NotFound'

export default () => (
  <div className="bounds">
  
  <Router>
  <Subheader />
    <div>
      <Switch>
        <Route path="/signin" />
        <Route path="/signup" />
        <Route exact path="/" />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
    <h1>Home</h1>
    <p>This homepage will eventually get state when courses are added .</p>
    <p>All courses // my courses // search courses .</p>
  </div>
);

{/* <Route path="/signin" component={UserSignInWithContext} />
<Route path="/signup" component={UserSignUpWithContext} />
<Route exact path="/" component={Home} />
<Route component={NotFound} /> */}