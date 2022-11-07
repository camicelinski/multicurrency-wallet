import types from './localStorage.types'

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
