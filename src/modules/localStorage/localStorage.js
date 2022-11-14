class LocalStorage {
  defaultKey = 'rows'

  getItem () {
    if (localStorage.getItem(this.defaultKey)) {
      const newItem = JSON.parse(localStorage.getItem(this.defaultKey))
      return newItem
    }

    return []
  }

  pushItem (item) {
    localStorage.setItem(this.defaultKey, JSON.stringify(item))
  }

  clear () {
    localStorage.clear()
  }
}

export default LocalStorage
