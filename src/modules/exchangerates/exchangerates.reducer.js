import types from './exchangerates.types'

const initState = {
  repos: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.RENDER_REPOS:
      return {
        ...state,
        repos: action.payload.repos
      }
    default:
      return state
  }
}

export default reducer
