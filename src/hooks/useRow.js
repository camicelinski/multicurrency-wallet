import { v4 as uuid } from 'uuid'
import { useSelector } from 'react-redux'

const useRow = () => {
  const { currentRate } = useSelector((state) => state.exchangerates)
  const values = useSelector((state) => state.form)
  const { currency, amount, dateOfPurchase, price } = values

  const getCurrentValue = () => {
    return (amount * currentRate).toFixed(2)
  }

  const getProfitOrLoss = (value) => {
    const profitOrLoss = (amount * (currentRate - price)).toFixed(2)
    const profitOrLossInPercents = ((profitOrLoss / value) * 100).toFixed(1)
    return `${profitOrLoss} (${profitOrLossInPercents}%)`
  }

  const createValuesForTableRow = () => {
    console.log(currentRate)
    const currentExchangeRate = currentRate
    const currentValue = getCurrentValue()
    const profitOrLoss = getProfitOrLoss(currentValue)
    const valuesForTableRow = [
      currency,
      amount,
      dateOfPurchase,
      price,
      currentExchangeRate,
      currentValue,
      profitOrLoss
    ]
    return {
      cells: valuesForTableRow,
      key: uuid()
    }
  }

  return [createValuesForTableRow()]
}

export default useRow
