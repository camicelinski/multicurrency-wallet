import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const initState = JSON.parse(localStorage.getItem('inputValues') || undefined)

const store = createStore(reducers, initState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('inputValues', JSON.stringify(state))
})

export default store
