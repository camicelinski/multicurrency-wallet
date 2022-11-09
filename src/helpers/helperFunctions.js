export const changeValueToNumberIfInputTypeNumber = (value, type) => {
  return type === 'number' ? parseFloat(value) : value
}
