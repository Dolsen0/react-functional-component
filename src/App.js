import React, { Component } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponents from './FunctionalComponent';

let count = 1


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         components types go here: <br/><br/>
         <FunctionalComponents count = {count}/>
         <ClassComponent count = {count}/>


        </header>
      </div>
    );
  }
}

export default App;
