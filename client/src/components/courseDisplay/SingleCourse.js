import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Form from '../Form'

//push 404 to stack if route not found
//loading
export default class SingleCourse extends Component {
  state = {
    course: {},
    authUser: this.props.context.authenticatedUser,
    update: false,
  }
  
  componentDidMount(){
    const idMatch = this.props.match.params.id
    this.props.context.data.getCourseData(idMatch).then(course =>{
        this.setState(() => {
          return { course: course }
          //need to push '404' to stack
      }); console.log(this.state.course, this.state.authUser)
    }).catch(err => console.log(err))
    }
    
  renderForm = () => {
    this.setState(()=>({update: true}))
  }
  userMatch = (authUser, course) => {
    if (authUser){
    const userString = authUser.firstName + " " + authUser.lastName
    if (userString === course.teacher){
      console.log(userString, course.teacher)
      return true
    }}
    console.log(course.teacher, 'FALSE!!')
    return false
  }
  render(){
  const {course, update, authUser} = this.state
  const allCourses = this.props.context.courses

  return (
    
  <div className="bounds">
    <div className="grid-100">
      {(update && authUser) ?       <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Update Course</h1>
          <Form 
            // cancel={}
            errors={false}
            // submit={}
            submitButtonText="Update"
            elements={() => (
              <React.Fragment>
                <input 
                  id="course-title" 
                  name="course-title" 
                  type="text"
                  value={course.title} 
                  //onChange={this.change} 
                  placeholder={course.title} />
                <input 
                  id="course-materials" 
                  name="course-materials" 
                  type="text-area"
                  value={course.materialsNeeded} 
                  //onChange={this.change} 
                  placeholder={course.materialsNeeded} />
                <input 
                  id="course-time" 
                  name="course-time"
                  type="text"
                  value={course.estimatedTime} 
                  //onChange={this.change} 
                  placeholder={course.estimatedTime} />
                <input 
                  id="course-description" 
                  name="course-description"
                  type="textarea"
                  value={course.description} 
                  //onChange={this.change} 
                  placeholder={course.description} />
              </React.Fragment>
            )} />
        </div>
      </div>
            :
            <div className='contact-details' key={course.id}>
              <h1>{course.title}</h1>
              <h2><strong>Teacher: </strong>{course.teacher}</h2>
              <h2><strong>Materials: </strong>{course.materialsNeeded}</h2>
              <h2><strong>Time: </strong>{course.estimatedTime}</h2>
              <p>{course.description}</p>
              {this.userMatch(authUser, course) && <button onClick={() => this.renderForm()}>Update Course</button> }
            </div> }
    </div>
  </div>
  );
      }
}
