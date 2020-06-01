import React from 'react';

export default ({context}) => { 
  console.log(context.actions.getAllCourses())
  return (
  <div className="bounds">
    <div className="grid-100">
      Courses to appear here
      {/*
        context.actions.getAllCourses()
    .then(data => data.map(item => (
      <p key={item.id}>{item.title}</p>
    ))) 
    */}
    </div>
  </div>
  );
}

