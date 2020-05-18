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
                  <Link className="signup" to="/signup">All Courses</Link>
                  <Link className="signin" to="/signin">My Courses</Link>
                  <Link className="signin" to="/home">Search</Link>
                </React.Fragment>
                
              }  
            </nav>
          </div>
        </div>
      );
    }
  };