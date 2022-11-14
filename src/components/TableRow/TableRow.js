import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { removeRowFromState, pushRowsToLS } from '../../modules/localStorage/localStorage.actions'

const TableRow = (props) => {
  const { row } = props
  const dispatch = useDispatch()

  const renderCells = () => {
    return row.cells.map((cell, index) => {
      return <td key={index}>{cell}</td>
    })
  }

  const removeRow = () => {
    dispatch(removeRowFromState(row.key))
    dispatch(pushRowsToLS())
  }

  return (
    <tr>
      {renderCells()}
      <td>
        <button
          onClick={removeRow}
        >
          X
        </button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  row: PropTypes.object
}

export default TableRow
