import formFields from '../../data/formFields'

function setInitState () {
  const objState = {}
  formFields.forEach((field) => {
    objState[field.name] = ''
  })
  return objState
}

const reducer = (state = setInitState(), action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
