import React from 'react';
import styled from 'styled-components';
import { withState } from 'recompose';

const CitationWrapper = styled.span`
  background-color: ${({ highlighted }) =>
    highlighted ? 'paleturquoise' : 'unset'};
`;

const CitationMarker = styled.span`
  margin-left: 5px;
  cursor: pointer;
  background-color: paleturquoise;
  padding: 0 2px;
`;

const Citation = ({ highlighted, setHighlighted, markerLabel, children }) => {
  return (
    <CitationWrapper highlighted={highlighted}>
      {children}
      <CitationMarker
        onMouseEnter={() => setHighlighted(true)}
        onMouseLeave={() => setHighlighted(false)}
      >
        [{markerLabel}]
      </CitationMarker>
    </CitationWrapper>
  );
};

export default Citation;

export const CitationStateful = withState(
  'highlighted',
  'setHighlighted',
  false
)(Citation);
