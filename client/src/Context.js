import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

export const Context = React.createContext(); 

export class Provider extends Component {

  constructor() {
    super();
    this.data = new Data();
  }

  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null, //pulls data from cookie as an authenticatedUser object or else returns null
    query: '',
    courses: [],
  };

  updateQuery = (query) => {
    this.setState(() => ({
        query: query.trim()
    }))
  }

  componentDidMount(){
    this.data.getAllCourses()
    .then((data)=>{
      this.setState(() => ({
        courses: data
      }))
    })
  }
  
  render() {
    const { authenticatedUser } = this.state;

    const value = {
      authenticatedUser,
      data: this.data,
      courses: this.state.courses,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
        getAllCourses: this.data.getAllCourses,
      } //included for authentication
    };
    return (
      <Context.Provider value={ value }>
        {this.props.children}
      </Context.Provider>  
    );
  }

  
  signIn = async (emailAddress, password) => {
    const user = await this.data.getUser(emailAddress, password)
    if (user !== null) {
      this.setState(() => {
        return { authenticatedUser: user }
    })};
    // Set cookie
    Cookies.set('authenticatedUser', //cookie name
      JSON.stringify(user), //stringified user data
      { expires: 1 }); //expires in one day
    return user;
  }

  signOut = () => {
    this.setState({ authenticatedUser: null });
    Cookies.remove('authenticatedUser');
  }

}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}