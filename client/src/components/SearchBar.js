import React from 'react';

class SearchForm extends React.Component{
    state = {
        text: "Search Courses"
    }
    render(){
        return(
            <form>
                <input type='text' value={this.state.text}></input>
            </form>
        )
    }
}