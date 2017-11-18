import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'


const NewContractButton = styled.button`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background: orange;
  bottom: 25px;
  right: 25px;
  padding: 16px;
  border-radius: 100px;
`

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

        <Link to='/new'>
          <NewContractButton>+</NewContractButton>
        </Link>

      </PageWrapper>
    )
  }
}

export default ContractsPage
