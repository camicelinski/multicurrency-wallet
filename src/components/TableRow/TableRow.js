import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  const { row } = props

  const renderCells = () => {
    return row.map((cell, index) => {
      return <td key={index}>{cell}</td>
    })
  }

  return (
    <tr>
      {renderCells()}
    </tr>
  )
}

TableRow.propTypes = {
  row: PropTypes.array
}

export default TableRow
