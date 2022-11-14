import React from 'react'
import FormContainer from '../../containers/FormContainer'
import TableContainer from '../../containers/TableContainer'
import StyledCurrencyWallet from './CurrencyWallet.styled'

export const CurrencyWallet = () => {
  return (
    <StyledCurrencyWallet>
      <FormContainer />
      <TableContainer />
    </StyledCurrencyWallet>
  )
}

export default CurrencyWallet
