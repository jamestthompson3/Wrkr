import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import * as actions from './actions'

const TodoWrapper = styled.div`
  border: 1px solid;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  li {
    flex:1;
    display: block;
  }
`
const TodoBox = styled.input.attrs({
  type: 'checkbox'
})`
  border: 1px solid #c1c1c1;
`
class Todo extends Component {

  render() {
    const { contract } = this.props
    return (
      <TodoWrapper>
        <ul>
          {contract.items.map(item =>
            <li key={item.id}>
              <TodoBox />
              <label>{item.text}</label>
            </li>
          )}
        </ul>
      </TodoWrapper>
    )
  }
}

export default connect(null, actions)(Todo)
