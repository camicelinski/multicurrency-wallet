import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRow from '../../hooks/useRow'
import { setFieldValue } from '../../modules/form/form.actions'
import { addRow, pushRowsToLS, getRowsfromLS } from '../../modules/localStorage/localStorage.actions'
import { getCurrentRate, getPriceByDate } from '../../modules/exchangerates/exchangerates.actions'
import { changeValueToNumberIfInputTypeNumber } from '../../helpers/helperFunctions'
import FormField from '../FormField'
import formFields from '../../data/formFields'

const Form = () => {
  const values = useSelector((state) => state.form)
  const { rateByDate } = useSelector((state) => state.exchangerates)
  const dispatch = useDispatch()
  const [valuesForTableRow] = useRow()

  useEffect(() => {
    dispatch(getRowsfromLS())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = (e, name, type) => {
    if (e.target.name === 'dateOfPurchase') {
      dispatch(getPriceByDate(e.target.value, values.currency))
      dispatch(setFieldValue('price', rateByDate))
    }

    const fieldValue = changeValueToNumberIfInputTypeNumber(e.target.value, type)
    dispatch(setFieldValue(name, fieldValue))
  }

  const renderFormFields = () => {
    return formFields.map((field) => {
      const { name, label, type, step, required } = field
      return (
        <FormField
          key={name}
          name={name}
          label={label}
          type={type}
          value={values[name]}
          step={step || null}
          required={required}
          onChange={(e) => handleInputChange(e, name, type)}
        />
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(getCurrentRate(values.currency))
    // const row = valuesForTableRow
    dispatch(addRow(valuesForTableRow))
    dispatch(pushRowsToLS())
  }
  /*
  const handleFormChange = (e) => {
    if (e.target.name === 'dateOfPurchase') {
      dispatch(getPriceByDate(e.target.value, values.currency))
    }
  }
  */
  const handleBlur = (e) => {
    if (e.target.name === 'currency') {
      const currency = e.target.value
      console.log(currency)
      dispatch(getCurrentRate(values.currency))
    }
    if (e.target.name === 'dateOfPurchase') {
      console.log(rateByDate)
      dispatch(setFieldValue('price', rateByDate))
    }
  }

  return (
    <form
      // onChange={handleFormChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
    >
      {renderFormFields()}
      <button>submit</button>
    </form>
  )
}

export default Form
