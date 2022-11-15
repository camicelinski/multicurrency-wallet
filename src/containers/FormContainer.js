import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useRow from '../hooks/useRow'
import { clearFields, setFieldValue } from '../modules/form/form.actions'
import { addRow, pushRowsToLS } from '../modules/localStorage/localStorage.actions'
import { getCurrentRate, getPriceByDate } from '../modules/exchangerates/exchangerates.actions'
import { getCurrentDate } from '../helpers/helperFunctions'
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

  const handleInputChange = (e, name, type) => {
    const currentDate = getCurrentDate()
    if (e.target.name === 'dateOfPurchase' && e.target.value < currentDate) {
      dispatch(getPriceByDate(e.target.value, values.currency))
    }

    dispatch(setFieldValue(name, e.target.value))
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
    const err = validateForm(values)
    setErrors(err)
    if (err.length === 0) {
      dispatch(addRow(valuesForTableRow))
      dispatch(pushRowsToLS())
      dispatch(clearFields())
    }
  }

  const handleBlur = (e) => {
    if (e.target.name === 'amount') {
      dispatch(getCurrentRate(values.currency))
    }
    if (e.target.name === 'dateOfPurchase') {
      dispatch(setFieldValue('price', rateByDate))
    }
  }

  return (
    <Form
      onBlur={handleBlur}
      onSubmit={handleSubmit}
    >
      {renderFormFields()}
    </Form>
  )
}

export default FormContainer
