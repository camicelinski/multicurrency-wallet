import types from './exchangerates.types'

const initState = {
  currentRate: '',
  rateByDate: ''
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_RATE:
      return {
        ...state,
        currentRate: action.payload
      }
    case types.SET_PRICE_BY_DATE:
      return {
        ...state,
        rateByDate: action.payload
      }
    default:
      return state
  }
}

export default reducer
