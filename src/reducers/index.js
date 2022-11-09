import { combineReducers } from 'redux'

import formReducer from '../modules/form/form.reducer'
import localStorageReducer from '../modules/localStorage/localStorage.reducer'

const reducers = combineReducers({
  form: formReducer,
  localStorage: localStorageReducer
})

export default reducers
