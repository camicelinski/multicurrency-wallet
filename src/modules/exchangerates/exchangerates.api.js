class ExchangeratesAPI {
  url = 'https://api.apilayer.com/exchangerates_data'
  key = 'DUP3OxiK4WG5KtI8X6DSyq3WTtxJ204Z'
  defaultCurrency = 'PLN'

  getCurrentRate = (base = 'EUR', currency = this.defaultCurrency) => {
    return this._fetch(`/latest?base=${base}`, currency)
  }

  getRatebyDate = (date, base = 'EUR', currency = this.defaultCurrency) => {
    return this._fetch(`/${date}?base=${base}`, currency)
  }

  getCurrenciesList = (currency) => {
    return this._fetch('/latest', currency)
  }

  handleErrors (resp) {
    if (!resp.ok) {
      throw Error(resp.statusText)
    }

    return resp
  }

  _fetch (additionalPath = '', currency) {
    const url = this.url + additionalPath

    const myHeaders = new Headers()
    myHeaders.append('apikey', this.key)

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    }

    return fetch(url, requestOptions)
      .then(this.handleErrors)
      .then((resp) => resp.json())
      .then((resp) => resp.rates[currency])
  }
}

export default ExchangeratesAPI
