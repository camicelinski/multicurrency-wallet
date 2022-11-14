import React from 'react'
import CurrencyWallet from '../CurrencyWallet'
import Header from '../Header/'
import { ResetStyle, GlobalStyle } from '../../styled'
import StyledApp from './App.styled'

export const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <StyledApp>
        <Header />
        <CurrencyWallet />
      </StyledApp>
    </>
  )
}

export default App
