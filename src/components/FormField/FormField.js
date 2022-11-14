import React from 'react'
import PropTypes from 'prop-types'
// import { useSelector, useDispatch } from 'react-redux'
// import { getCurrenciesList } from '../../modules/exchangerates/exchangerates.actions'
import options from '../../data/currencyOptions'
import Error from '../Error'

const FormField = (props) => {
  const { name, label, type, step, required, value, onChange, errors } = props

  const showErrors = () => {
    return (
      errors.map((error, index) => {
        return (
          error && error.field.name === name ?
            <Error
              key={index}
              text={error.text}
            />
            :
            ''
        )
      })
    )
  }

  // ALTERNATIVE SOLUTION TO GENERATE OPTIONS IN SELECT CURRENCY
  // const dispatch = useDispatch()
  // dispatch(getCurrenciesList())
  // const options = useSelector((state) => state.exchangerates.currenciesList)

  if (type === 'select') {
    return (
      <>
        <label htmlFor={name}>
          {label}
        </label>
        <select
          id={name}
          value={value}
          required={required}
          step={step}
          onChange={onChange}
        >
          {options.map((option) => {
            return (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            )
          })}
        </select>
        {showErrors()}
      </>
    )
  } else {
    return (
      <>
        <label htmlFor={name}>
          {label}
        </label>
        <input
          name={name}
          type={type}
          value={value}
          required={required}
          step={step}
          onChange={onChange}
        />
        {showErrors()}
      </>
    )
  }
}

FormField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  step: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.object)
}

export default FormField
