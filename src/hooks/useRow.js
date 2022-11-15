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
    const currentExchangeRate = currentRate
    const currentValueNumber = getCurrentValue()
    const currentValue = `${currentValueNumber} PLN`
    const profitOrLoss = getProfitOrLoss(currentValueNumber)
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
