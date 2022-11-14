import React from 'react'
import CurrencyWallet from '../CurrencyWallet'
import Header from '../Header/'
import { ResetStyle, GlobalStyle } from '../../styled'

export const App = () => {
  return (
    <div>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <CurrencyWallet />
    </div>
  )
}

export default App
