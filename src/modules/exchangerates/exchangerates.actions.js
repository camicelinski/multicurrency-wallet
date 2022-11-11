// import { useSelector } from 'react-redux'
import types from './exchangerates.types'
import ExchangeratesAPI from './exchangerates.api'
// import { setFieldValue } from '../form/form.actions'

const ratesAPI = new ExchangeratesAPI()

export const setCurrentRate = (rate) => {
  return {
    type: types.SET_CURRENT_RATE,
    payload: rate.toFixed(2)
  }
}

export const setRateByDate = (rate) => {
  return {
    type: types.SET_PRICE_BY_DATE,
    payload: rate.toFixed(2)
  }
}

export const getCurrentRate = (currency) => (dispatch, getState) => {
  console.log(currency)
  ratesAPI.getRate(currency)
    .then((resp) => dispatch(setCurrentRate(resp.rates.PLN)))
}

export const getPriceByDate = (date, currency) => (dispatch, getState) => {
  // const { rateByDate } = useSelector((state) => state.exchangerates)
  ratesAPI.getRatebyDate(date, currency)
    // .then(resp => console.log(resp.rates.PLN))
    .then((resp) => dispatch(setRateByDate(resp.rates.PLN)))
    // .then((resp) => dispatch(setFieldValue('price', (resp.rates.PLN).toFixed(2))))
}
