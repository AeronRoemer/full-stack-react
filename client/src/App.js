import React, { Component } from 'react';
import HeaderCom from './components/Header.js'
import './styles/reset.css';
import './styles/global.css';
//fetch polyfill
class App extends Component {
  getUsers(){
    fetch('http://localhost:5000/api/users', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    }).then(response => response.json()).then(data => data.map(item => console.log(item.id)))
  }


    render(){  

  return (
    <div className="App">
      <header className="App-header">
      <HeaderCom />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          {this.getUsers()}

        
      </header>
    </div>
  );
  };
}

export default App;
