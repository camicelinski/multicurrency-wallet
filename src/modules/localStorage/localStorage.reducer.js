import types from './localStorage.types'

const initState = {
  rows: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_ROW:
      return {
        ...state,
        rows: [
          ...state.rows,
          action.payload
        ]
      }
    case types.GET_ROWS:
      return {
        ...state,
        rows: [
          // ...state.rows,
          ...action.payload
        ]
      }
    default:
      return state
  }
}

export default reducer
