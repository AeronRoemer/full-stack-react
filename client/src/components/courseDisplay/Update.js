import React, { Component } from 'react'
import Form from '../Form.js'

export default class UpdateCourse extends React.Component{
    state = {

    }
    render(){
        return(
            <div className="bounds">
<div className="grid-33 centered signin">
  <h1>Sign Up</h1>
  <Form 
    //cancel={this.cancel}
    //errors={errors}
    //submit={this.submit}
    submitButtonText="Sign Up"
    elements={() => (
      <React.Fragment>
        <input 
          id="courseTitle" 
          name="courseTitle" 
          type="text"
          //value={firstName} 
          //onChange={this.change} 
          placeholder="Course Name" />
        <input 
          id="teacher" 
          name="teacher" 
          type="text"
          //value={lastName} 
          //onChange={this.change} 
          placeholder="Teacher" />
        <input 
          id="materials" 
          name="materials" 
          type="textarea"
          value={emailAddress} 
          onChange={this.change} 
          placeholder="Materials" />
      </React.Fragment>
    )} />
</div>
</div>

        )
    }
}