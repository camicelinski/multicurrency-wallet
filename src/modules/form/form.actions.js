import types from './form.types'

export const setFieldValue = (name, value) => {
  return {
    type: types.SET_FIELD_VALUE,
    payload: { name, value }
  }
}

export const submitForm = () => {
  return {
    type: types.SUBMIT_FORM,
    payload: true
  }
}
