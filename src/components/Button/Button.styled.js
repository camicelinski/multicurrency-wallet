import styled from 'styled-components'

const StyledButton = styled.button`
  background: var(--color-contrast);
  border-radius: var(--radius-primary);
  color: var(--color-shadow-dark);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  height: 2.4rem;
  margin-top: 19px;

  &:hover {   
    background-color: var(--color-contrast-hover);
  }

  &.btn--delete {
    margin-top: 0;
    min-width: 0;
    width: max-content;
    font-size: 1rem;
    color: var(--text-user);
    background: transparent;
    border-radius: var(--radius-secondary);
    border: none;
    outline: 1px solid transparent;
    padding: 10px 20px;    

    &:hover {
      color: #AB9CA5;
    }
  }
`

export default StyledButton
