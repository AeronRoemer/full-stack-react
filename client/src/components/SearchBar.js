import React from 'react';
import { Link } from 'react-router-dom'

export default class SearchForm extends React.Component{
    state = {
        query: "Search Courses"
    }
//event handler to update search query in searchbar form 
    updateQuery = (e) => {
            this.setState({ query: e.target.value });
        }
//handle submit
    handleSubmit = (e) =>{
          e.preventDefault();
          this.performSearch(this.state.query)
          e.currentTarget.reset();
         }
//search function filters out courses from data imported at ComponentDidMount
    performSearch = (query = 'course') => {
        console.log(query)
        }
    
    render(){
        const courses = this.props.context.courses
        console.log(this.state.query)
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' 
                value={this.state.text}
                onChange={this.updateQuery} />
                <button type="submit" className="search-button"> Submit </button>
            </form>
        )
    }
}

