import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import ContactsPage from './components/ContractsPage'
import NewContractPage from './components/NewContractPage'


const theme = {
  primaryColor: '#f1c965'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={ContactsPage} />
            <Route path='/new' component={NewContractPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
