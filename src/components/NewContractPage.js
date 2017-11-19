import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import styled from 'styled-components'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'

import PageWrapper from './PageWrapper'
import * as actions from './actions'
import { legal, SIGN_REQUEST } from './reducer'
import LoadingScreen from './LoadingScreen'


const getId = () => Math.random().toString(36).substr(2, 10)

const Icon = ({ name, color, className, link, ...rest }) => (
  <i
    className={`fa fa-fw fa-${name} ${className}`}
    style={{
      color,
      cursor: link ? 'pointer' : 'initial'
    }}
    {...rest}
  />
)

const Form = styled.form`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  textarea[name='legal'] {
    opacity: 0.5;
    min-height: 100px;
    font-size: 1rem;
    resize: vertical;
  }
  .DateRangePickerInput {
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .DateInput_input {
    background: transparent;
    padding: 8px;
  }
  .DateInput {
    width: 50%;
    background: transparent;
  }
`

const FormHeader = styled.div`
  font-size: 1.5rem;
  margin: 10px 0 5px 0;
`

const StyledField = styled(Field)`
  margin-bottom: 5px;
  font-size: 1.2rem;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

const StyledItems = styled.ul`
  input {
    margin-bottom: 5px;
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-right: 10px;
  }
`

const Button = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 1.2rem;
  border: 3px solid ${p => p.theme.primaryColor};
  color: ${p => p.theme.primaryColor};
  background: transparent;
  font-weight: 700;
  border-radius: 4px;
  background: ${p => p.theme.primaryColor};
  color: white;
  &:hover {
    box-shadow: 0 2px 2px 1px #f1c96585;
  }
`

class NewContractPage extends Component {
  static propTypes = {
    redirectTo: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    redirectTo: '/',
    messages: []
  }

  state = {
    focusedInput: null,
    loadingScreen: false
  }

  showLoading = () => {
    this.setState({ loadingScreen: true })
  }

  render() {
    const { loadingScreen, focusedInput } = this.state

    if (loadingScreen) {
      return (
        <LoadingScreen
          onComplete={() => this.props.history.push('/')}
          messages={[
            'Generating contract...',
            'Uploading to SignSpace...',
            'Sending to customer...'
          ]}
        />
      )
    }

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
            items: [{ id: 0, text: '', done: false }],
            startDate: null,
            endDate: null,
            signDate: null,
            price: '',
            legal,
            status: SIGN_REQUEST
          }}
          onSubmit={(values, actions) => {
            const { addContract } = this.props
            setTimeout(() => {
              addContract(values)
              actions.setSubmitting(false)
              this.showLoading()
            }, 1000)
          }}
          render={props => (
            <Form onSubmit={props.handleSubmit}>
              <FormHeader>Customer</FormHeader>
              <StyledField type='text' name='customer' placeholder='Company' required />
              <StyledField type='text' name='contactName' placeholder='Name' required />
              <StyledField type='text' name='address' placeholder='Address' required />
              <StyledField type='email' name='contactEmail' placeholder='Email' required />
              <StyledField type='tel' name='contactPhone' placeholder='Phone' required />
              <FormHeader>Contract Items</FormHeader>
              <StyledItems>
                {props.values.items.map((item, i) => (
                  <li key={i}>
                    <input
                      type='text'
                      name={`item${i}`}
                      value={item.text}
                      onChange={e => props.setFieldValue(
                        'items',
                        props.values.items.map((itemV, iV) => iV === i ? {
                          ...itemV,
                          text: e.target.value
                        } : itemV))
                      }
                    />
                    {i === props.values.items.length - 1 ? (
                      <Icon link name='plus' color='green' onClick={() => props.setFieldValue(
                        'items',
                        [...props.values.items, { id: props.values.items.length, text: '', done: false }]
                      )} />
                    ) : (
                      <Icon link name='remove' color='red' onClick={() => props.setFieldValue(
                        'items',
                        props.values.items.filter((itemV, iV) => iV !== i)
                      )} />
                    )}
                  </li>
                ))}
              </StyledItems>
              <FormHeader>Terms</FormHeader>
              <DateRangePicker
                startDate={props.values.startDate && moment(props.values.startDate, 'DD.MM.YYYY')}
                endDate={props.values.endDate && moment(props.values.endDate, 'DD.MM.YYYY')}
                onDatesChange={({ startDate, endDate }) => props.setValues({
                  ...props.values,
                  startDate: startDate && startDate.format('DD.MM.YYYY'),
                  endDate: endDate && endDate.format('DD.MM.YYYY')
                })}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                required
                withPortal
                orientation='vertical'
                displayFormat='DD.MM.YYYY'
              />
              <FormHeader>Price</FormHeader>
              <StyledField type='number' name='price' placeholder='Price' required />
              <FormHeader>Legal</FormHeader>
              <StyledField component='textarea' name='legal' placeholder='legal' />
              <Button type='submit' disabled={props.isSubmitting}>
                {props.isSubmitting
                  ? <Icon name='spinner' className='fa-spin' />
                  : 'Send Contract'
                }
              </Button>
            </Form>
          )}
        />
      </PageWrapper>
    )
  }
}

export default connect(null, actions)(NewContractPage)
