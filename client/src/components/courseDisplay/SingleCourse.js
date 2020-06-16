import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//filter with search
export default class SingleCourse extends Component {
  state = {
    course: {},
  }
  
  componentDidMount(){
    const idMatch = this.props.match.params.id
    this.props.context.actions.getCourse(idMatch).then(course =>{
        this.setState(() => {
          return { course: course }
      })}).catch(err => console.log(err))
    }
    

  render(){
  const course = this.state.course
  const allCourses = this.props.context.courses
  //since we have the courses in props, we filter through them instead of making 
  // a new API call
  return (
    
  <div className="bounds">
    <div className="grid-100">
      {<div className='contact-details' key={course.id}>
              <h1>{course.title}</h1>
              <h2><strong>Teacher: </strong>{course.teacher}</h2>
              <h2><strong>Materials: </strong>{course.materialsNeeded}</h2>
              <h2><strong>Time: </strong>{course.estimatedTime}</h2>
              <p>{course.description}</p>
            </div>
          }
    </div>
  </div>
  );
      }
}
{/* <li key={course.id} className='course-list-item'>
<div className='contact-avatar'></div>
<div className='contact-details'>
    <h1>{course.title}</h1>
    <p>{course.description}</p>
</div>
</li> */}