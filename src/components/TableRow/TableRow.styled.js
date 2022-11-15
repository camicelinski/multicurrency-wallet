import styled from 'styled-components'

const StyledTableRow = styled.tr`
  font-size: 0.9rem;
  background: var(--color-shadow-light);
  text-align: center;
  height: 70px;
  white-space: nowrap;
  vertical-align: middle;
  
  &:hover {
    background: var(--color-shadow-hover);
  }

  td {
    margin-top: 10px;
    width: 10%;
  }

  td:first-child {
    border-radius: var(--radius-primary) 0 0 var(--radius-primary);
  }

  td:last-child {
    border-radius: 0 var(--radius-primary) var(--radius-primary) 0;
  }

  td.profit {
    width: 20%;
    color: var(--text-green);
    font-weight: bold;
  }

  td.loss {    
    width: 20%;
    color: var(--text-error);
    font-weight: bold;
  }
`

export default StyledTableRow
