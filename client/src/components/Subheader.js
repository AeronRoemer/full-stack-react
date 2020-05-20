import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
    render() {
      const { context } = this.props;
      
      return (
        <div className="subheader">
          <div className="bounds">
            <nav>
              {
                <React.Fragment>
                  <Link className="signup" to="/signu">All Courses</Link>
                  <Link className="signin" to="/signin">My Courses</Link>
                  <Link className="signin" to="/">Home</Link>
                </React.Fragment>
              }  
            </nav>
          </div>
        </div>
      );
    }
  };