import React, {Component} from 'react';
//filter with search
export default class Course extends Component{
  state = {
    display: [],
  }
  //filter through array to display matching results
  render(){
    console.log(this.props.context.courses)
  const allCourses = this.context.courses
  if (this.state.query){
    console.log(this.state.query)
  }
  return (
    
  <div className="bounds">
    <div className="grid-100">
      <ol className="course-list">
             {this.state.display.map((course) =>(
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
}