import React, {Component} from 'react';
//filter with search
class CoursesDisplay extends Component { 
  state= {
    query: '',
    courses: '',
  }

  updateQuery = (query) => {
    this.setState(() => ({
        query: query.trim()
    }))
  }

  componentDidMount(){
    this.props.context.actions.getAllCourses()
    .then((data)=>{
      this.setState(() => ({
        courses: data
      }))
    })
  }
  render(){
    let allCourses = this.state.courses
    // allCourses.map(item => (
    //  <p key={item.id}>{item.title}</p>
    //))
  return (
  <div className="bounds">
    <div className="grid-100">
      Courses to appear here
      {console.log(allCourses[0], this.state.courses)}
    </div>
  </div>
  );
  }
}

export default CoursesDisplay

