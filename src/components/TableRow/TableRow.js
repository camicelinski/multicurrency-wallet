import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { removeRow } from '../../modules/localStorage/localStorage.actions'

const TableRow = (props) => {
  const { row } = props
  const dispatch = useDispatch()

  const renderCells = () => {
    return row.cells.map((cell, index) => {
      return <td key={index}>{cell}</td>
    })
  }

  return (
    <tr>
      {renderCells()}
      <td>
        <button
          onClick={() => dispatch(removeRow(row.key))}
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
