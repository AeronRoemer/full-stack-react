import React, {Component} from 'react';
//filter with search
export default ({context}) => { 
  

  let allCourses = context.courses
  return (
    
  <div className="bounds">
    <div className="grid-100">
      Courses to appear here
      <ol className="course-list">
             { allCourses.map((course) =>(
                 <li key={course.id} className='course-list-item'>
                     <div className='contact-avatar'></div>
                     <div className='contact-details'>
                         <h1>{course.title}</h1>
                         <p>{course.description}</p>
                     </div>
                 </li>
             ))}
         </ol>
    </div>
  </div>
  );
  }


