import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';


export default class UserSignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors: [],
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      errors,
    } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign Up"
            elements={() => (
              <React.Fragment>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text"
                  value={firstName} 
                  onChange={this.change} 
                  placeholder="First Name" />
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text"
                  value={lastName} 
                  onChange={this.change} 
                  placeholder="Last Name" />
                <input 
                  id="email" 
                  name="email" 
                  type="text"
                  value={email} 
                  onChange={this.change} 
                  placeholder="Your Email" />
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={this.change} 
                  placeholder="Password" />
              </React.Fragment>
            )} />
          <p>
            Already have a user account? <Link to="/signin">Click here</Link> to sign in!
          </p>
        </div>
      </div>
    );
  }

  change = (event) => { //updates state value on changes to form
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = () => {
    const {context} = this.props;

    const {
      firstName,
      lastName,
      email,
      password,
    } = this.state; 
  
    // New user information
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

   //calls createUser which was passed via value object in context
   //passes 'user' data to API to 'POST' a user
    context.data.createUser(user)
      .then( errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          console.log("Sent user to db")
          // context.actions.signIn(username, password)
          // .then(() => {
          //   this.props.history.push('/authenticated');    
          // }
          //);

        }
      }).catch( err => { 
        console.log(err); // log error
        this.props.history.push('/error'); // push 'error' route to history stack - brings up in browser 
      })

  }

  cancel = () => {
      this.props.history.push('/');
  }
}