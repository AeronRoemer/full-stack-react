import React from 'react';

export default ({context}) => { 
  
  return (
  <div className="bounds">
    <div className="grid-100">
      Courses to appear here
      {/* {
        context.actions.getAllCourses()
    .then(data => data.map(item => (
      <p>{item.id}</p>
    ))) 
      } */}
    </div>
  </div>
  );
}

//<h1>This will display all courses</h1>