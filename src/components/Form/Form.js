import React from 'react'
import PropTypes from 'prop-types'
import StyledForm from './Form.styled'
import Button from '../Button'

const Form = (props) => {
  const { onBlur, onSubmit, children } = props

  return (
    <StyledForm
      onBlur={(e) => onBlur(e)}
      onSubmit={(e) => onSubmit(e)}
      noValidate
    >
      {children}
      <Button>add</Button>
    </StyledForm>
  )
}

Form.propTypes = {
  onBlur: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Form
