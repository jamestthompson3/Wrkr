import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ContactsPage from './components/ContractsPage'
import NewContractPage from './components/NewContractPage'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ContactsPage} />
          <Route path='/new' component={NewContractPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
