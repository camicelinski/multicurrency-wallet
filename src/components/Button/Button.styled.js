import styled from 'styled-components'

const StyledButton = styled.button`
  background: var(--color-contrast);
  border-radius: var(--radius-primary);
  color: var(--color-shadow-dark);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  padding: 0.75rem 0;
  font-size: 1rem;
  border: none;

  :active {
    
  }

  &:hover {   
    background-color: var(--color-contrast-hover);
  }

  &.btn--delete {
    min-width: 0;
    width: max-content;
    font-size: 1rem;
    color: var(--text-user);
    background: transparent;
    border-radius: var(--radius-secondary);
    border: none;
    outline: 1px solid transparent;
    padding: 10px 12px;    

    &:hover {
      color: #D0C8CD;
    }
  }
  /*
  @media screen and (min-width: 960px) {
    :hover {
      color: var(--text-highlight);
    }
  } */
`

export default StyledButton
