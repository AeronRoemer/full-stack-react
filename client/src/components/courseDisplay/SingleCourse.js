import React from 'react';
//filter with search
export default (props) => {

  const idMatch = props.params.id
  const allCourses = props.context.courses
  //since we have the courses in props, we filter through them instead of making 
  // a new API call
  return (
    
  <div className="bounds">
    <div className="grid-100">
      {allCourses.filter((item)=> item.id == idMatch).map((course) => (
        <div className='contact-details' key={course.id}>
              <h1>{course.title}</h1>
              <h2><strong>Teacher: </strong>{course.teacher}</h2>
              <h2><strong>Materials: </strong>{course.materialsNeeded}</h2>
              <h2><strong>Time: </strong>{course.estimatedTime}</h2>
              <p>{course.description}</p>
            </div>))}
    </div>
  </div>
  );
}

{/* <li key={course.id} className='course-list-item'>
<div className='contact-avatar'></div>
<div className='contact-details'>
    <h1>{course.title}</h1>
    <p>{course.description}</p>
</div>
</li> */}