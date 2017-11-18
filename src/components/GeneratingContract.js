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

class GeneratingContract extends Component {
  state = {
    message: 'Generating contract...'
  }

  componentDidMount() {
    delay()
      .then(() => this.setState({ message: 'Uploading to SignSpace...' }))
      .then(delay)
      .then(() => this.setState({ message: 'Sending to the customer...' }))
      .then(delay)
      .then(() => this.props.history.push('/'))
  }

  render() {
    const { message } = this.state
    return (
      <PageWrapper>
        <Wrapper>
          <i className='fa fa-fw fa-spin fa-spinner' />
          {message}
        </Wrapper>
      </PageWrapper>
    )
  }
}

export default withRouter(GeneratingContract)
