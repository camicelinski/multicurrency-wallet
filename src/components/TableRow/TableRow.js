import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { removeRowFromState, pushRowsToLS } from '../../modules/localStorage/localStorage.actions'
import StyledTableRow from './TableRow.styled'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TableRow = (props) => {
  const { row } = props
  const dispatch = useDispatch()

  const getClassName = (cell, index) => {
    if (index === 6) {
      const cellSliced = cell.slice(0, 4)
      const cellNumber = Number(cellSliced)
      if (cellNumber >= 0) {
        return 'profit'
      } else {
        return 'loss'
      }
    } else {
      return ''
    }
  }

  const renderCells = () => {
    return row.cells.map((cell, index) => {
      return (
        <td
          key={index}
          className={getClassName(cell, index)}
        >
          {cell}
        </td>
      )
    })
  }

  const removeRow = () => {
    dispatch(removeRowFromState(row.key))
    dispatch(pushRowsToLS())
  }

  return (
    <StyledTableRow>
      {renderCells()}
      <td>
        <Button
          onClick={removeRow}
          className={'btn btn--delete'}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className={'meeting__icon--delete'}
          />
        </Button>
      </td>
    </StyledTableRow>
  )
}

TableRow.propTypes = {
  row: PropTypes.object
}

export default TableRow
