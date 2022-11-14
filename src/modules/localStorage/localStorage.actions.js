import LocalStorage from './localStorage'
import types from './localStorage.types'

const LS = new LocalStorage()

export const addRow = (row) => {
  return {
    type: types.ADD_ROW,
    payload: row
  }
}

export const getRows = (rows) => {
  return {
    type: types.GET_ROWS,
    payload: rows
  }
}

export const removeRowFromState = (key) => {
  return {
    type: types.REMOVE_ROW,
    payload: key
  }
}

export const getRowsfromLS = () => (dispatch, getState) => {
  const rowsFromLS = LS.getItem()
  dispatch(getRows(rowsFromLS))
}

export const pushRowsToLS = () => (dispatch, getState) => {
  const rows = getState().localStorage.rows
  LS.pushItem(rows)
}
