import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.PureComponent {
  render() {
    const { context } = this.props;
    
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
         
        </div>
      </div>
    );
  }
};