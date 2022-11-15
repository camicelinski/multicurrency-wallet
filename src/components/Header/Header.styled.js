import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: center;

  h1 {    
    padding: 0 15px;
    font-family: 'Rubik', Arial, sans-serif;
    font-size: 3.4rem;    
    letter-spacing: 0.1rem;
    margin: 0;

    @media screen and (min-width: 768px) {
      line-height: 6rem;
    }
  }
`

export default StyledHeader
