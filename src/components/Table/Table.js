import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '../TableRow/TableRow'

const Table = (props) => {
  const { heads, rows } = props

  const renderTheads = () => {
    return heads.map((item) => {
      const { head } = item
      return <th key={head}>{head}</th>
    })
  }

  const renderTrows = () => {
    const trows = rows.map((row) => {
      return (
        <TableRow
          key={row.key}
          row={row.cells}
        />
      )
    })
    return trows
  }

  return (
    <table>
      <thead>
        <tr>{renderTheads()}</tr>
      </thead>
      <tbody>
        {renderTrows()}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  heads: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.array
}

export default Table
