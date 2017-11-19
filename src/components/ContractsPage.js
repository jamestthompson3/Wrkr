import React, { Component } from 'react'
import { connect } from 'react-redux'

import PageWrapper from './PageWrapper'
import * as actions from './actions'
import * as selectors from './selectors'
import Todo from './TodoList'
import {
  NewContractButton,
  Panel,
  PanelActions,
  PanelContent,
  Icon,
  ContractsWrapper,
  ExpandedView,
  InvoiceButton
} from './ContractsPageComponents'

const contractsActive = {
  SIGN_REQUEST: 1,
  IN_PROGRESS: 2,
  INVOICE_REQUEST: 2,
  COMPLETE: 0,
  WORK_DONE: 3
}
const statusIcons = {
  SIGN_REQUEST: 'hourglass',
  IN_PROGRESS: 'circle',
  INVOICE_REQUEST: 'eur',
  COMPLETE: 'check'
}
class ContractsPage extends Component {
  state = {
    expanded: null
  }

  showInvoiceButton = id => {
    const { changeStatus } = this.props
    changeStatus(id, 'WORK_DONE')
  }
  sendInvoice = contractId => {
    const { changeStatus } = this.props
    changeStatus(contractId, 'INVOICE_REQUEST')
    this.setState({ invoice: null })
  }

  handleClick = i => {
    this.setState(prevState => ({
      expanded: prevState.expanded === i ? null : i
    }))
  }

  render() {
    const { expanded } = this.state
    const { contracts } = this.props
    return (
      <PageWrapper title='Contracts'>
        <ContractsWrapper>
          {contracts.map((contract, i) =>
            <Panel active={contractsActive[contract.status]} key={i} expanded={i === expanded}>
              <PanelContent>
                <h2>{contract.customer}</h2>
                <p>{contract.address}</p>
                <p>{contract.contact}</p>
                <i style={{ marginTop: '10px', width: '100%', textAlign: 'left' }} className={`fa fa-fw fa-chevron-${i === expanded ? 'up' : 'down'}`} onClick={() => this.handleClick(i)}  />
                { i === expanded &&
                  <ExpandedView>
                    <p>{contract.contactName}</p>
                    <p>{contract.startDate}-{contract.endDate}</p>
                    <p>signed: {contract.signDate}</p>
                    <Todo contract={contract} showInvoice={() => this.showInvoiceButton(contract.id)} />
                  </ExpandedView>
                }
              </PanelContent>
              <PanelActions>
                <div>
                  <a href={`mailto:${contract.contactEmail}`}><Icon className="fa fa-fw fa-envelope" /></a>
                  <a href={`tel:${contract.contactPhone}`}><Icon className="fa fa-fw fa-phone" /></a>
                </div>
                { contract.status === 'WORK_DONE'
                  ? <InvoiceButton onClick={() => this.sendInvoice(contract.id)}>Send Invoice</InvoiceButton>
                  : <i style={{ alignSelf: 'flex-end' }} className={`fa fa-fw fa-${statusIcons[contract.status]}`} />
                }
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
