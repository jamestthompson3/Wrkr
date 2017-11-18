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
    background-color: ${p => p.theme.primaryColor};
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
class Todo extends Component {

  render() {
    const { contract } = this.props
    return (
      <TodoWrapper>
        <ul>
          {contract.items.map(item =>
            <li key={item.id}>
              <TodoBox>
                <p>{item.text}</p>
                <input type="checkbox" />
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
