import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import * as actions from './actions'

const TodoWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  li {
    flex:1;
    display: block;
  }
`
const TodoBox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  p {
    padding-top: 2px;
  }
  input {
    position: absolute;
    opacity: 0;
  }
  input:checked ~ span {
    background-color: ${p => p.active === 2
    ? p.theme.primaryColor
    : p.active === 3
      ? '#ffffff8a'
      : '#c1c1c1'};
  }
  input:checked ~ span:after {
    display: block;
}
span:after {
    left: 6px;
    top: 0px;
    width: 5px;
    height: 12px;
    border: solid #322F4A;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}
`
const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 20px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 5px;
  &:after {
    display: none;
    content: "";
    position: absolute;
  }
`
const contractsActive = {
  SIGN_REQUEST: 1,
  IN_PROGRESS: 2,
  INVOICE_REQUEST: 2,
  COMPLETE: 0,
  WORK_DONE: 3
}
class Todo extends Component {
  componentDidUpdate() {
    const { contract, showInvoice } = this.props
    if (contract.items.every(item => item.done === true) && contract.status === 'IN_PROGRESS') {
      showInvoice()
    }
  }
  render() {
    const { contract, toggleItem } = this.props
    return (
      <TodoWrapper>
        <ul>
          {contract.items.map(item =>
            <li key={item.id}>
              <TodoBox active={contractsActive[contract.status]} >
                <p>{item.text}</p>
                <input type="checkbox" checked={item.done} onChange={ () => toggleItem(contract.id, item.id) } />
                <Checkmark />
              </TodoBox>
            </li>
          )}
        </ul>
      </TodoWrapper>
    )
  }
}

export default connect(null, actions)(Todo)
