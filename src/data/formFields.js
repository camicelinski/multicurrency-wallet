const formFields = [
  {
    name: 'currency',
    label: 'Currency',
    type: 'text',
    // placeholder: 'RRRR-MM-DD',
    // regExp: /^20\d{2}[-/.](0[1-9]|1[0-2])[-/.](0[1-9]|[12]\d|3[01])$/,
    // err: 'please schedule your meeting today or in the future',
    required: true
  },
  {
    name: 'amount',
    label: 'Amount',
    type: 'number',
    // placeholder: 'HH:MM',
    // regExp: /^((0[8-9]|1[0-9]):[0-5][0-9])$|^(20:00)$/,
    // err: 'please schedule your meeting during working hours 08:00 - 20:00',
    required: true
  },
  {
    name: 'dateOfPurchase',
    label: 'Date of purchase',
    type: 'date',
    // regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
    // err: 'this field requires at least 3 letters',
    required: true
  },
  {
    name: 'price',
    label: 'Price',
    type: 'number',
    step: '0.01',
    // regExp: /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,2}$/,
    // err: 'this field requires at least 3 letters',
    required: false
  }
]

export default formFields
