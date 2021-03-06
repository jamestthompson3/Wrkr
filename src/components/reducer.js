export const SIGN_REQUEST = 'SIGN_REQUEST'
export const IN_PROGRESS = 'IN_PROGRESS'
export const INVOICE_REQUEST = 'INVOICE_REQUEST'
export const COMPLETE = 'COMPLETE'
export const WORK_DONE = 'WORK_DONE'

export const legal = 'This agreement is very straight forward and simple. It was drafted primarily for use by an individual wishing to disclose information that needs to be kept secret to another individual.'

const initialContracts = {
  '1234poi12344': {
    id: '1234poi12344',
    customer: 'Random Company',
    address: 'Kulvajakuja 4 A, Espoo',
    contactName: 'Sas Kasds',
    contactEmail: 'sassas@randome.fi',
    contactPhone: '+3423490238423',
    startDate: '23.10.2017',
    endDate: '20.11.2017',
    signDate: '20.10.2017',
    legal,
    items: [
      { id: 1, text: 'Tear out old fixtures', done: true },
      { id: 2, text: 'Build sets for new kitchen', done: true },
      { id: 3, text: 'Municipal sign off', done: false }
    ],
    price: 2000,
    status: IN_PROGRESS
  },
  '1662ddi12344': {
    id: '1662ddi12344',
    customer: 'Slack Oy',
    address: 'Kusilinja 7 A, Vantaa',
    contactName: 'Adelina Kaksi',
    contactEmail: 'kaksikolme@randome.fi',
    contactPhone: '+32349022323',
    startDate: '23.10.2017',
    endDate: '20.11.2017',
    signDate: '20.10.2017',
    legal,
    items: [
      { id: 1, text: 'Take out old tiles', done: true },
      { id: 2, text: 'Municpal inspection', done: true },
      { id: 3, text: 'Install new tiles', done: true }
    ],
    price: 2300,
    status: INVOICE_REQUEST
  },
  'asd234234sad': {
    id: 'asd234234sad',
    customer: 'Helsinki University',
    address: 'Merikatu 14 A, Heslinki',
    contactName: 'Pekka Hämmälainen',
    contactEmail: 'pekkH@hsy.fi',
    contactPhone: '0432348746',
    startDate: '11.11.2017',
    endDate: '03.23.2018',
    signDate: '05.11.2017',
    legal,
    items: [
      { id: 1, text: 'Preliminary tear down', done: true },
      { id: 2, text: 'Pour footings', done: true },
      { id: 3, text: 'Framing', done: true },
      { id: 4, text: 'Municipal inspection', done: false },
      { id: 5, text: 'Finish work', done: false }
    ],
    price: 1200,
    status: IN_PROGRESS
  },
  'hlasdf234234': {
    id: 'hlasdf234234',
    customer: 'Lapalainen, Juuko',
    address: 'Riistapolku 14 A, Espoo',
    contactName: 'Juuko Lapalainen',
    contactEmail: 'juuLap@gmail.com',
    contactPhone: '093334546',
    startDate: '28.10.2017',
    endDate: '01.09.2018',
    signDate: '15.10.2017',
    legal,
    items: [
      { id: 1, text: 'Remove old cabinets', done: true },
      { id: 2, text: 'Install new cabinets', done: false }
    ],
    price: 500,
    status: IN_PROGRESS
  },
  'asdi32340234': {
    id: 'asdi32340234',
    customer: 'City of Espoo',
    address: 'Rantapolku 23 C, Helsinki',
    contactName: 'Janne Kaaja',
    contactEmail: 'kjann@yahoo.com',
    contactPhone: '084384565',
    startDate: '25.11.2017',
    endDate: '24.05.2019',
    signDate: null,
    legal,
    items: [
      { id: 1, text: 'Get municipal permit', done: false },
      { id: 2, text: 'Install new sauna', done: false }
    ],
    price: 450,
    status: SIGN_REQUEST
  },
  '235asdf23498': {
    id: '235asdf23498',
    customer: 'Kiviniemi, Tatu',
    address: 'Mannerhieminkatu 1, Helsinki',
    contactName: 'Tatu Kiviniemi',
    contactEmail: 'tatu@aol.com',
    contactPhone: '054384368',
    startDate: '02.08.2017',
    endDate: '12.11.2017',
    signDate: '20.07.2017',
    legal,
    items: [
      { id: 1, text: 'Install new doors', done: true },
      { id: 2, text: 'Install new windows', done: true }
    ],
    price: 200,
    status: COMPLETE
  }
}

const reducer = (state = initialContracts, action) => {
  switch (action.type) {
    case 'CONTRACT_ADD':
      return {
        ...state,
        [action.contract.id]: action.contract
      }
    case 'CONTRACT_REMOVE':
      // eslint-disable-next-line
      const { [action.contractId]: deletedContract, restContracts } = state
      return restContracts
    case 'ITEM_TOGGLE': {
      const contract = state[action.contractId]
      return {
        ...state,
        [action.contractId]: {
          ...contract,
          items: contract.items.map(item => item.id === action.itemId ? ({
            ...item,
            done: !item.done
          }) : item)
        }
      }
    }
    case 'CONTRACT_CHANGE_STATUS': {
      const contract = state[action.contractId]
      return {
        ...state,
        [action.contractId]: {
          ...contract,
          status: action.status
        }
      }
    }
    default:
      return state
  }
}

export default reducer
