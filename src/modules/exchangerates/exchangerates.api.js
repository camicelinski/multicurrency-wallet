class ExchangeratesAPI {
  url = 'https://api.apilayer.com/exchangerates_data'
  key = 'EvHibpdh0Xk45aArIMsCVCniRrioNrnF'
  defaultCurrency = 'PLN'

  getRate = (currency) => {
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
  }
}

export default ExchangeratesAPI
