import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import PageWrapper from './PageWrapper'


const delay = () => new Promise(resolve => {
  setTimeout(() => resolve(), 1000)
})

const Wrapper = styled.div`
  background: linear-gradient(to bottom, ${p => p.theme.primaryColor}, orange);
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  i {
    font-size: 3rem;
    margin: 1rem;
  }
`

class LoadingScreen extends Component {
  state = {
    i: 0
  }

  componentDidMount() {
    this.showNextMessage()
  }

  showNextMessage = () => {
    const { i } = this.state
    const { messages, redirectTo, history } = this.props
    return i === messages.length
      ? history.push(redirectTo)
      : delay()
        .then(() => this.setState(prevState => ({ i: prevState.i + 1 })))
        .then(this.showNextMessage)
  }

  render() {
    const { i } = this.state
    const { messages } = this.props

    return (
      <PageWrapper>
        <Wrapper>
          <i className='fa fa-fw fa-spin fa-spinner' />
          {messages[i]}
        </Wrapper>
      </PageWrapper>
    )
  }
}

export default withRouter(LoadingScreen)
