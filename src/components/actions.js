export const addContract = contract => ({
  type: 'CONTRACT_ADD',
  contract
})

export const removeContract = contractId => ({
  type: 'CONTRACT_REMOVE',
  contractId
})

export const toggleItem = (contractId, itemId) => ({
  type: 'ITEM_TOGGLE',
  contractId,
  itemId
})

export const changeStatus = (contractId, status) => ({
  type: 'CONTRACT_CHANGE_STATUS',
  contractId,
  status
})
