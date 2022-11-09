class localStorage {
  defaultKey = 'rows'

  getItemFromLS () {
    if (localStorage.getItem(this.defaultKey)) {
      const newItem = JSON.parse(localStorage.getItem(this.defaultKey))
      return newItem
    }

    return []
  }

  pushItemToLS (item) {
    localStorage.setItem(this.defaultKey, JSON.stringify(item))
  }
}

export default localStorage
