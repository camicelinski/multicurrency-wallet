import React from 'react'
// import { useSelector } from 'react-redux'
import tableHeads from '../data/tableHeads'
import Table from '../components/Table'

const TableContainer = () => {
  // const { rows } = useSelector((state) => state.localStorage)

  return (
    <Table
      heads={tableHeads}
      // rows={rows}
    />
  )
}

export default TableContainer
