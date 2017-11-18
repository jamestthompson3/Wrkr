import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ContactsPage from './components/ContractsPage'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ContactsPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
