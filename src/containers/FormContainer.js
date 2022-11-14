import React, { useState/*, useEffect */ } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRow from '../hooks/useRow'
import { clearFields, setFieldValue } from '../modules/form/form.actions'
import { addRow, pushRowsToLS/*, getRowsfromLS */ } from '../modules/localStorage/localStorage.actions'
import { getCurrentRate, getPriceByDate } from '../modules/exchangerates/exchangerates.actions'
import { changeValueToNumberIfInputTypeNumber } from '../helpers/helperFunctions'
import Form from '../components/Form'
import FormField from '../components/FormField'
import formFields from '../data/formFields'
import validateForm from '../helpers/validateForm'

const FormContainer = () => {
  const values = useSelector((state) => state.form)
  const { rateByDate } = useSelector((state) => state.exchangerates)
  const dispatch = useDispatch()
  const [valuesForTableRow] = useRow()
  const [errors, setErrors] = useState([])
  /*
  useEffect(() => {
    dispatch(getRowsfromLS())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
*/
  const handleInputChange = (e, name, type) => {
    if (e.target.name === 'dateOfPurchase') {
      dispatch(getPriceByDate(e.target.value, values.currency))
      // dispatch(setFieldValue('price', rateByDate))
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
          errors = {errors}
        />
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(getCurrentRate(values.currency))
    // const row = valuesForTableRow

    console.log(values)
    const err = validateForm(values)
    console.log(err)
    setErrors(err)
    if (err.length === 0) {
      dispatch(addRow(valuesForTableRow))
      dispatch(pushRowsToLS())
      dispatch(clearFields())
    }
  }
  /*
  const handleFormChange = (e) => {
    if (e.target.name === 'dateOfPurchase') {
      dispatch(getPriceByDate(e.target.value, values.currency))
    }
  }
  */
  const handleBlur = (e) => {
    if (e.target.name === 'amount') {
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
    <Form
      // onChange={handleFormChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
    >
      {renderFormFields()}
    </Form>
  )
}

export default FormContainer
