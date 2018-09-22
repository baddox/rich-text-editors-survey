import React from 'react';
import styled from 'styled-components';
import { withState } from 'recompose';

const CitationWrapper = styled.span`
  background-color: ${({ highlighted }) =>
    highlighted ? 'paleturquoise' : 'none'};
`;

const CitationMarker = styled.span`
  cursor: pointer;
  padding: 0px 1px;
  font-size: 80%;
  border: 1px solid silver;
  border-radius: 20%;
  margin-left: 1px;
  position: relative;
  top: -5px;
  letter-spacing: 0.5px;
  color: #555;
`;

const Citation = ({
  highlighted,
  setHighlighted,
  label,
  onClickMarker,
  children,
}) => {
  return (
    <span>
      <CitationWrapper highlighted={highlighted}>{children}</CitationWrapper>
      <CitationMarker
        onMouseEnter={() => setHighlighted(true)}
        onMouseLeave={() => setHighlighted(false)}
        onClick={onClickMarker ? onClickMarker : () => {}}
      >
        {label}
      </CitationMarker>
    </span>
  );
};

export default Citation;

export const CitationStateful = withState(
  'highlighted',
  'setHighlighted',
  false
)(Citation);
