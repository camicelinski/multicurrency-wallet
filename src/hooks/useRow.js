import { v4 as uuid } from 'uuid'
import { useSelector } from 'react-redux'

const useRow = () => {
  const values = useSelector((state) => state.form)
  const { currency, amount, dateOfPurchase, price } = values

  const createValuesForTableRow = () => {
    const currentExchangeRate = ''
    const currentValue = ''
    const profitOrLoss = ''
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
