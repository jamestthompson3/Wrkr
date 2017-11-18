import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'


const NewContractButton = styled(Link)`
  position: absolute;
  bottom: 25px;
  right: 25px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  background: ${p => p.theme.primaryColor};
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 100px;
  border: none;
  text-decoration: none;
`
const Panel = styled.div`
  flex: 1;
  transition: all 0.4s ease;
  transition-delay: 0s;
  background: ${({ active }) => active ? '#e67150' : 'gray'};
  color: ${({ active }) => active ? 'f1c965' : 'black'};
`
const ContractsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

        <NewContractButton to='/new'>+</NewContractButton>

      </PageWrapper>
    )
  }
}

export default ContractsPage
