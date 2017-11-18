import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageWrapper from './PageWrapper'

const devData = [
  { customer: 'Helsinki University', signedDate: '11.11.2017', contact: 'Pekka Hämmälainen',  contactPhone: '0432348746', contactEmail: 'pekkH@hsy.fi' },
  { customer: 'Lapalainen, Juuko', signedDate: '28.10.2017', contact: 'Juuko Lapalainen',  contactPhone: '093334546', contactEmail: 'juuLap@gmail.com', active: 'true' },
  { customer: 'City of Espoo', signedDate: '04.08.2017', contact: 'Janne Kaaja',  contactPhone: '084384565', contactEmail: 'kjann@yahoo.com' },
  { customer: 'Kiviniemi, Tatu', signedDate: '02.08.2017', contact: 'Tatu Kiviniemi',  contactPhone: '054384368', contactEmail: 'tatu@aol.com', active: 'true' }
]
const NewContractButton = styled(Link)`
  position: fixed;
  bottom: 25px;
  right: 149px;
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
  box-shadow: 0 0 2px 2px #50453f4f;
  text-decoration: none;
`
const Panel = styled.li`
  flex: 1 7;
  transition: all 0.4s ease;
  transition-delay: 0s;
  background: ${({ active }) => active ? '#e67150' : '#6f5a3e87'};
  color: ${({ active }) => active ? '#f1c965' : 'black'};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 98%;
  margin: auto;
  padding: 10px 0px;
  box-shadow: 0px 0px 11px 1px #676767a3;
  justify-content: space-around;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.35rem;
  h2 {
    margin: auto;
  }
  p {
    margin: 0.3rem;
  }
`
const ContractsWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  margin: 0;
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
          {devData.map((contract, i) =>
            <Panel active={contract.active} key={i}>
              <h2>{contract.customer}</h2>
              <p>{contract.signedDate}</p>
              <p>{contract.contact}</p>
              <p>{contract.contactPhone}</p>
              <p>{contract.contactEmail}</p>
            </Panel>
          )}
        </ContractsWrapper>

        <NewContractButton to='/new'>+</NewContractButton>

      </PageWrapper>
    )
  }
}

export default ContractsPage
