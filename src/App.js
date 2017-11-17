import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { makeRequest } from './common/api/signspace'

// { value: 'e4618d365ec342bb8a3f5a67acf5d3df', path: '/', domain: 'app.signspace.com' })
class App extends Component {
  componentDidMount() {
    makeRequest('messages')
      .then(response => console.log(response))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
