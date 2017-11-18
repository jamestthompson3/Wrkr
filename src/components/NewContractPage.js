import React, { Component } from 'react'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PageWrapper from './PageWrapper'
import * as actions from './actions'
import { legal, SIGN_REQUEST } from './reducer'
import { setTimeout } from 'timers';


const getId = () => Math.random().toString(36).substr(2, 10)

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const FormHeader = styled.div`
  font-size: 2rem;
  margin: 10px 0 5px 0;
`

const StyledField = styled(Field)`
  margin-bottom: 10px;
  font-size: 1.5rem;
  padding: 2px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`

// const FormSection = styled.div`
//   margin-bottom: 20px;
//   width: 100%;
// `

const SubmitButton = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 1.2rem;
  border: 3px solid ${p => p.theme.primaryColor};
  color: ${p => p.theme.primaryColor};
  background: transparent;
  font-weight: 700;
  border-radius: 4px;
  &:hover {
    background: ${p => p.theme.primaryColor};
    color: white;
  }
`

class NewContractPage extends Component {
  render() {
    return (
      <PageWrapper title='New Contract'>
        <Formik
          initialValues={{
            id: getId(),
            customer: '',
            address: '',
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            items: [],
            startDate: '',
            endDate: '',
            signDate: null,
            legal,
            status: SIGN_REQUEST
          }}
          onSubmit={(values, actions) => {
            const { addContract, history } = this.props
            setTimeout(() => {
              addContract(values)
              actions.setSubmitting(false)
              history.push('/')
            }, 1000)
          }}
          render={props => (
            <Form onSubmit={props.handleSubmit}>
              <FormHeader>Customer</FormHeader>
              <StyledField type='text' name='customer' placeholder='Company' />
              <StyledField type='text' name='contactName' placeholder='Name' />
              <StyledField type='text' name='address' placeholder='Address' />
              <StyledField type='email' name='contactEmail' placeholder='Email' />
              <StyledField type='phone' name='contactPhone' placeholder='Phone' />
              <FormHeader>Contract Items</FormHeader>
              <FormHeader>Terms</FormHeader>
              <FormHeader>Legal</FormHeader>
              <StyledField type='phone' name='legal' placeholder='legal' />
              <SubmitButton type='submit' disabled={props.isSubmitting}>
                Send Contract
              </SubmitButton>
            </Form>
          )}
        />
      </PageWrapper>
    )
  }
}

export default connect(null, actions)(NewContractPage)
