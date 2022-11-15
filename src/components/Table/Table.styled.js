import styled from 'styled-components'

const StyledTable = styled.table`
  margin: 20px;
  border-collapse: collapse;
  border: none;

  thead {
    text-transform: uppercase;
    vertical-align: bottom;
    font-size: 0.75rem;

    tr th {
      padding: 10px;
    }
  }
`

export default StyledTable
