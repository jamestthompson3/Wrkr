import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ContactsPage from './components/ContractsPage'
import NewContractPage from './components/NewContractPage'
import reducer from './components/reducer'


const store = createStore(reducer)

const theme = {
  primaryColor: '#f1c965'
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path='/' component={ContactsPage} />
              <Route path='/new' component={NewContractPage} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
