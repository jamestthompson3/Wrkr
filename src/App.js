import React, { Component } from 'react'
import styled from 'styled-components'
import { makeRequest } from './common/api/signspace'

const Header = styled.header`
  background-color: #e6a833;
  height: 70px;
  padding: 20px;
  color: white;
  box-shadow: 0 0 9px 0px #403f3f;
  text-align: center;
`
class App extends Component {
  componentDidMount() {
    makeRequest('messages')
      .then(response => console.log(response))
  }
  render() {
    return (
      <div className="App">
        <Header>
          <h1>Welcome to Wrkr!</h1>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
