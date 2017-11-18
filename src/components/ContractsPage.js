import React, { Component } from 'react'
import styled from 'styled-components'

import PageWrapper from './PageWrapper'


class ContractsPage extends Component {
  componentDidMount() {
    this.loadContracts()
  }

  loadContracts = () => {
    console.log('loading contracts...')
  }

  render() {
    return (
      <PageWrapper title='Contracts'>
        Contracts Page
      </PageWrapper>
    )
  }
}

export default ContractsPage
