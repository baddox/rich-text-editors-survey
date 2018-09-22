import React from 'react';
import Paragraph from '../../components/Paragraph';
import { CitationStateful } from '../../components/Citation';

export const SlateParagraph = ({ children, ...rest }) => {
  return <Paragraph {...rest}>{children}</Paragraph>;
};

export const SlateCitation = ({ children, ...rest }) => {
  return <CitationStateful {...rest}>{children}</CitationStateful>;
};
