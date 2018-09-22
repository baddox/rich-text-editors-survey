import React from 'react';
import styled from 'styled-components';
import withHover from '../util/withHover';

const CitationWrapper = styled.span`
  background-color: ${({ highlighted }) =>
    highlighted ? 'rgba(0, 100, 200, 0.25)' : 'none'};
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
  hovered,
  hoverProps,
  label,
  onClickMarker,
  children,
  ...rest
}) => {
  // return <span {...rest}>{children}</span>;
  return (
    <span {...rest}>
      <CitationWrapper highlighted={hovered}>{children}</CitationWrapper>
      <CitationMarker
        onClick={onClickMarker ? onClickMarker : () => {}}
        {...hoverProps}
      >
        {label}
      </CitationMarker>
    </span>
  );
};

export default Citation;

export const CitationStateful = withHover(Citation);
