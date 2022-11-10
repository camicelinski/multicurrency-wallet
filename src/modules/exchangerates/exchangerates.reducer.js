import types from './exchangerates.types'

const initState = {
  rate: null,
  priceByDate: null
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_RATE:
      return {
        ...state,
        rate: action.payload
      }
    case types.SET_PRICE_BY_DATE:
      return {
        ...state,
        priceByDate: action.payload
      }
    default:
      return state
  }
}

export default reducer
