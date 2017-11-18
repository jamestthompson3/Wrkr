import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PageWrapper from './PageWrapper'
import * as actions from './actions'
import * as selectors from './selectors'


const devData = [
  { customer: 'Helsinki University', startDate: '11.11.2017', endDate: '03.23.2018', address: 'Merikatu 14 A, Heslinki', contact: 'Pekka Hämmälainen',  contactPhone: '0432348746', contactEmail: 'pekkH@hsy.fi', status: 'hourglass-half' },
  { customer: 'Lapalainen, Juuko', startDate: '28.10.2017', endDate: '01.09.2018', address: 'Riistapolku 14 A, Espoo', contact: 'Juuko Lapalainen',  contactPhone: '093334546', contactEmail: 'juuLap@gmail.com', active: 'true', status: 'circle' },
  { customer: 'City of Espoo', startDate: '04.08.2017', endDate: '24.05.2019', address: 'Rantapolku 23 C, Helsinki', contact: 'Janne Kaaja',  contactPhone: '084384565', contactEmail: 'kjann@yahoo.com', active: 'true', status: 'circle' },
  { customer: 'Kiviniemi, Tatu', startDate: '02.08.2017', endDate: '12.11.2017', address: 'Mannerhieminkatu 1, Helsinki', contact: 'Tatu Kiviniemi',  contactPhone: '054384368', contactEmail: 'tatu@aol.com',  status: 'check' }
]

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
  box-shadow: 0 0 2px 2px #50453f4f;
  text-decoration: none;
`

const Panel = styled.li`
  height: ${p => p.expanded ? '300px' : '100px'};
  transition: all 0.4s ease;
  transition-delay: 0s;
  background: ${({ active }) => active ? 'radial-gradient(circle at top left, #3b3b56, #3b3b56, #2a2a3e)' : 'radial-gradient(circle at top left, #c1c1c1, #c1c1c1, #6f5a3e87)'};
  color: ${({ active }) => active ? '#f1c965' : 'black'};
  display: flex;
  width: 95%;
  margin: auto;
  padding: 10px 8px;
  box-shadow: 0px 0px 11px 1px #676767a3;
  justify-content: space-around;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.35rem;
  h2 {
    margin: 0;
  }
  p {
    margin: 2px 0;
  }
`

const PanelActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: inherit;
  }
  .fa-circle {
    color: green;
  }
`

const PanelContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  i {
    cursor: pointer;
  }
`

const Icon = styled.i`
  margin: 0.3rem;
  padding: 3px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid;
  cursor: pointer;
  text-decoration: none;
`

const ContractsWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0;
  margin: 0;
  box-shadow: 4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35), -4vh 7vh 14vh -6vh rgba(0, 0, 0, 0.35);
`

class ContractsPage extends Component {
  state = {
    expanded: null
  }

  loadContracts = () => {
    console.log('loading contracts...')
  }

  handleClick = i => {
    this.setState(prevState => ({
      expanded: prevState.expanded === i ? null : i
    }))
  }

  render() {
    const { expanded } = this.state
    const { contracts } = this.props
    console.log(contracts)

    return (
      <PageWrapper title='Contracts'>
        <ContractsWrapper>
          {devData.map((contract, i) =>
            <Panel active={contract.active} key={i} expanded={i === expanded}>
              <PanelContent>
                <h2>{contract.customer}</h2>
                <p>{contract.address}</p>
                <p>{contract.contact}</p>
                <i style={{ marginTop: '10px', width: '100%', textAlign: 'left' }} className={`fa fa-fw fa-chevron-${i === expanded ? 'up' : 'down'}`} onClick={() => this.handleClick(i)}  />
              </PanelContent>
              <PanelActions>
                <div>
                  <a href={`mailto:${contract.contactEmail}`}><Icon className="fa fa-fw fa-envelope" /></a>
                  <a href={`tel:${contract.contactPhone}`}><Icon className="fa fa-fw fa-phone" /></a>
                </div>
                <i style={{ alignSelf: 'flex-end' }} className={`fa fa-fw fa-${contract.status}`} />
              </PanelActions>
            </Panel>
          )}
        </ContractsWrapper>

        <NewContractButton to='/new'>+</NewContractButton>

      </PageWrapper>
    )
  }
}

const mapState = state => ({
  contracts: selectors.getContracts(state)
})

export default connect(mapState, actions)(ContractsPage)
