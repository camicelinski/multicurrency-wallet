import React from 'react'
import PropTypes from 'prop-types'

const FormField = (props) => {
  const { name, label, type, step, required, value, onChange } = props
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
    </>
  )
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
  onChange: PropTypes.func
}

export default FormField
