import React from 'react'
import PropTypes from 'prop-types'

const Table = (props) => {
  const { heads } = props

  const renderTheads = () => {
    return heads.map((item) => {
      const { head } = item
      return <th key={head}>{head}</th>
    })
  }

  const renderTrows = () => {

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
  heads: PropTypes.arrayOf(PropTypes.object)
}

export default Table
