import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

// const initState = JSON.parse(localStorage.getItem('state')) || undefined
const rowsLS = JSON.parse(localStorage.getItem('rows')) || []
const initState = {
  localStorage: {
    rows: rowsLS
  }
}

const store = createStore(reducers, initState, composeWithDevTools(applyMiddleware(thunk)))
/*
store.subscribe(() => {
  // const state = store.getState()
  // localStorage.setItem('state', JSON.stringify(state))
  const rows = store.getState()
  localStorage.setItem('rows', JSON.stringify(rows))
})
*/

export default store
