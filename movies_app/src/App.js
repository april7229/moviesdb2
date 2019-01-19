import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends Component
{
  componentWillMount()
  {
    axios.get( '/api/test' ).then( response =>
    {
      console.log( response.data );
    })
  }
  render() {
    return (
      <div className="App">
      <h1>MY MOVIE APP</h1>
      </div>
    );
  }
}

export default App;
