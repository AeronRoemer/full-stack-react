import React from 'react';

export default class SearchForm extends React.Component{
    state = {
        query: "Search Courses"
    }
//event handler to update search query in searchbar form 
    updateQuery = (e) => {
            this.setState({ query: e.target.value });
        }
//search function filters out courses from data imported at ComponentDidMount
    performSearch = (query = 'course') => {

        }
    
    render(){
        const courses = this.props.context.courses
        console.log(this.state.query)
        return(
            <form>
                <input type='text' value={this.state.text}></input>
            </form>
        )
    }
}