import React from 'react';
import { Link } from 'react-router-dom';

/*authUser ? //if authUser exists, render header with name & signout
              <React.Fragment>
                <span>Welcome, {authUser.name}!</span>
                <Link className="signout" to="/signout">Sign Out</Link>
              </React.Fragment>
            :    //if not, signup/signin
            */

export default class Header extends React.PureComponent {
  render() {
    const { context } = this.props;
    console.log(this.props);
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav>
            {
              <React.Fragment>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/signin">Sign In</Link>
                <Link className="signin" to="/">Home</Link>
              </React.Fragment>
            }  
          </nav>
        </div>
      </div>
    );
  }
};