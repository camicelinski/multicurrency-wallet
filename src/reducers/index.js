import { combineReducers } from 'redux'

import formReducer from '../modules/form/form.reducer'
import localStorageReducer from '../modules/localStorage/localStorage.reducer'
import exchangeratesReducer from '../modules/exchangerates/exchangerates.reducer'

const reducers = combineReducers({
  form: formReducer,
  localStorage: localStorageReducer,
  exchangerates: exchangeratesReducer
})

export default reducers
