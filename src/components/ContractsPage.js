import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'


const NewContractButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 25px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background: ${p => p.theme.primaryColor};
  padding: 16px;
  border-radius: 100px;
  border: none;
`
const Panel = styled.div`
  flex: 1;
  transition: all 0.4s ease;
  transition-delay: 0s;
  background: ${({ active }) => active ? '#e67150' : 'gray'};
  color: ${({ active }) => active ? 'f1c965' : 'black'};
`
const ContractsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2vh;
  overflow: hidden;
  box-shadow: 4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35), -4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35);
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
        <ContractsWrapper>
          <Panel active>
            <h1>Helsinki University</h1>
          </Panel>
          <Panel>
            <h1>Lapalainen</h1>
          </Panel>
          <Panel>
            <h1>City of Espoo</h1>
          </Panel>
        </ContractsWrapper>

        <Link to='/new'>
          <NewContractButton text='+' radius='rounded'>+</NewContractButton>
        </Link>

      </PageWrapper>
    )
  }
}

export default ContractsPage
