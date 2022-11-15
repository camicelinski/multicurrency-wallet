import styled from 'styled-components'

const StyledFormField = styled.div`
  font-size: 1rem;
  margin-right: 1rem;
  // position: relative;

  :not(:first-child) {
    // margin-top: 1.4rem;
  }

  input,
  select {
    background: var(--text-secondary);
    border-radius: var(--radius-primary);
    border: none;
    color: var(--bg-primary);
    // height: 40px;
    letter-spacing: 0.1rem;
    outline: 1px solid transparent;
    padding: 10px;
    width: 100%;
    height: 2.4rem;
        
    // :focus,
    // :valid {
    //  box-shadow: 0.3rem 0.3rem 0.6rem var(--color-shadow-primary), -0.2rem -0.2rem 0.5rem var(--color-shadow-secondary);
    // }
    
    :focus ~ label,    
    :valid ~ label {
      font-size: 0.9rem;
      // transform: translateY(-32px);
    }    
  }
  
  label {
    font-size: 0.95rem;
    color: var(--text-primary);
    left: 1px;
    letter-spacing: 1px;
    padding: 0 10px 10px;
    // position: absolute;
    // top: 1px;
    transition: transform var(--transition-style), font-size var(--transition-style);

    // span {
    //   font-size: 0.8rem;
    //   color: var(--text-user);
    //   margin-left: 15px;
    // }
  } 
  
`

export default StyledFormField
