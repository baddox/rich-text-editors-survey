import styled from 'styled-components';

const Button = styled.button`
  background-color: silver;
  font-size: 100%;
  &:disabled {
    background-color: white;
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

export default Button;
