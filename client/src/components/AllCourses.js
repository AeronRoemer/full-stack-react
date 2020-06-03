import React, {Component} from 'react';
//filter with search
export default ({context}) => { 
    let allCourses = context.courses
    // allCourses.map(item => (
    //  <p key={item.id}>{item.title}</p>
    //))
  return (
  <div className="bounds">
    <div className="grid-100">
      Courses to appear here
      {console.log(context)}
    </div>
  </div>
  );
  }


