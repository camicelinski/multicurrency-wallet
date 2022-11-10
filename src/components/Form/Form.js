import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useRow from '../../hooks/useRow'
import { setFieldValue } from '../../modules/form/form.actions'
import { addRow, pushRowsToLS, getRowsfromLS } from '../../modules/localStorage/localStorage.actions'
import { changeValueToNumberIfInputTypeNumber } from '../../helpers/helperFunctions'
import FormField from '../FormField'
import formFields from '../../data/formFields'

const Form = () => {
  // const values = useSelector((state) => state.form)
  const dispatch = useDispatch()
  const [valuesForTableRow] = useRow()

  useEffect(() => {
    dispatch(getRowsfromLS())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e, name, type) => {
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
          // value={values[name]}
          step={step || null}
          required={required}
          onChange={(e) => handleChange(e, name, type)}
        />
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const row = valuesForTableRow
    dispatch(addRow(row))
    dispatch(pushRowsToLS())
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      {renderFormFields()}
      <button>submit</button>
    </form>
  )
}

export default Form
