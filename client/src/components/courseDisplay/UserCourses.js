import React from 'react';
//filter with search
export default (props) => {
  const GetUserCourses = props.context.data.getUserCourses
  const userId = props.context.authenticatedUser.id
  const userCourses = props.context.courses.filter((item)=> item.userId == userId)
  //since we have the courses in props, we filter through them instead of making 
  // a new API call
  return (
    
  <div className="bounds">
    <div className="grid-100">
      {userCourses ? <h1>It appears you don't have any courses</h1> : userCourses.map((course) => (
        <div className='contact-details' key={course.id}>
              <h1>{course.title}</h1>
              <h2><strong>Teacher: from userCourses </strong>{course.teacher}</h2>
              <h2><strong>Materials: </strong>{course.materialsNeeded}</h2>
              <h2><strong>Time: </strong>{course.estimatedTime}</h2>
              <p>{course.description}</p>
            </div>))}
    </div>
  </div>
  );
}