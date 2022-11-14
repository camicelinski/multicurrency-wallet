const formFields = [
  {
    name: 'currency',
    label: 'Currency',
    type: 'select',
    regExp: /^[A-Z]{3}$/,
    err: 'select a valid currency',
    required: true
  },
  {
    name: 'amount',
    label: 'Amount',
    type: 'number',
    err: 'amount must be greater than zero',
    required: true
  },
  {
    name: 'dateOfPurchase',
    label: 'Date of purchase',
    type: 'date',
    regExp: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
    err: 'select a date today or in the past',
    required: true
  },
  {
    name: 'price',
    label: 'Price',
    type: 'number',
    step: '0.01',
    err: 'price must be greater than zero',
    required: false
  }
]

export default formFields
