class ExchangeratesAPI {
  url = 'https://api.apilayer.com/exchangerates_data'
  key = 'A0EDR3VoQhkOAu0onLT5bSwoPNMPsZcd'
  defaultCurrency = 'PLN'

  getRate = (currency) => {
    console.log(currency)
    return this._fetch(`/latest?base=${currency}`)
  }

  getRatebyDate = (date, currency) => {
    return this._fetch(`/${date}?base=${currency}`)
  }

  getCurrenciesList = () => {
    return this._fetch('/latest')
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
