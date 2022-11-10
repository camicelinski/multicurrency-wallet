import types from './exchangerates.types'
import ExchangeratesAPI from './exchangerates.api'
import { setFieldValue } from '../form/form.actions'

const ratesAPI = new ExchangeratesAPI()

export const setCurrentRate = (rate) => {
  return {
    type: types.SET_CURRENT_RATE,
    payload: rate.toFixed(2)
  }
}

export const setPriceByDate = (price) => {
  return {
    type: types.SET_PRICE_BY_DATE,
    payload: price.toFixed(2)
  }
}

export const getCurrentRate = (base = 'EUR', currency = 'PLN') => (dispatch, getState) => {
  ratesAPI.getCurrentRate(base, currency)
    .then((resp) => dispatch(setCurrentRate(resp)))
}

export const getPriceByDate = (date, base = 'EUR', currency = 'PLN') => (dispatch, getState) => {
  ratesAPI.getRatebyDate(date, base, currency)
    .then((resp) => dispatch(setFieldValue('price', resp.toFix)))
}
