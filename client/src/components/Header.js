import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    //const { context } = this.props;
    
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">MyAuth</h1>
          <nav>
            { //if authUser exists, render header with name & signout
              <React.Fragment>
                <span>Welcome,!</span>
                <Link className="signout" to="/signout">Sign Out</Link>
              </React.Fragment>
            }
          </nav>
        </div>
      </div>
    );
  }
};