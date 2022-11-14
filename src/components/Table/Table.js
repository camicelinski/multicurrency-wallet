import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '../TableRow/TableRow'
import StyledTable from './Table.styled'

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
          row={row}
        />
      )
    })
    return trows
  }

  return (
    <StyledTable>
      <thead>
        <tr>{renderTheads()}</tr>
      </thead>
      <tbody>
        {renderTrows()}
      </tbody>
    </StyledTable>
  )
}

Table.propTypes = {
  heads: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.array
}

export default Table
