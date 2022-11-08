import React from 'react'
import FormField from '../FormField'
import formFields from '../../data/formFields'

const Form = () => {
  const handleChange = () => {

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
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      {renderFormFields()}
    </form>
  )
}

export default Form
