import styled from 'styled-components';
import { connect } from 'react-redux';

const Bold = styled.span`
  font-weight: bold;
  background-color: ${({ highlight }) =>
    highlight ? 'rgba(252, 20, 20, 0.2)' : 'none'};
`;

export default Bold;

export const BoldConnected = connect(highlight => ({ highlight }))(Bold);
