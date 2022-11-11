class ExchangeratesAPI {
  url = 'https://api.apilayer.com/exchangerates_data'
  key = 'DUP3OxiK4WG5KtI8X6DSyq3WTtxJ204Z'
  defaultCurrency = 'PLN'

  getRate = (currency) => {
    console.log(currency)
    return this._fetch(`/latest?base=${currency}`)
  }

  getRatebyDate = (date, currency) => {
    return this._fetch(`/${date}?base=${currency}`)
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

  _fetch (additionalPath = '') {
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
      // .then((resp) => console.log(resp.rates[this.defaultCurrency]))
      // .then((resp) => resp.rates[this.defaultCurrency])
  }
}

export default ExchangeratesAPI
