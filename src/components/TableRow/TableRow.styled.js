import styled from 'styled-components'

const StyledTableRow = styled.tr`
  background: var(--color-shadow-light);
  text-align: center;
  height: 70px;
  // border: none;
  white-space: nowrap;
  vertical-align: midlles;

  &:hover {
    background: var(--color-shadow-hover);
  }

  td {
    width: 14%;
  }

  td:first-child {
    border-radius: var(--radius-primary) 0 0 var(--radius-primary);
  }

  td:last-child {
    border-radius: 0 var(--radius-primary) var(--radius-primary) 0;
  }

  td.profit {
    color: var(--text-green);
    font-weight: bold;
  }

  td.loss {
    color: var(--text-error);
    font-weight: bold;
  }
`

export default StyledTableRow
