import React from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
  const { onBlur, onSubmit, children } = props

  return (
    <form
      onBlur={(e) => onBlur(e)}
      onSubmit={(e) => onSubmit(e)}
      noValidate
    >
      {children}
      <button>submit</button>
    </form>
  )
}

Form.propTypes = {
  onBlur: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Form
