import React from 'react';
import { SlateCitation } from './components';

export const CITATION = 'citation';

export const hasCitation = value => {
  return value.inlines.some(inline => inline.type == CITATION);
};

function wrapCitation(change, text) {
  change.wrapInline({
    type: CITATION,
    data: { text },
  });

  change.moveToEnd();
}

const unwrapCitation = change => {
  change.unwrapInline(CITATION);
};

export const onClickCitation = (event, value, onChange) => {
  event.preventDefault();
  const hasCit = hasCitation(value);
  const change = value.change();

  if (hasCit) {
    change.call(unwrapCitation);
  } else if (value.selection.isExpanded) {
    // Add a new citation.

    const text = window.prompt('Enter the text of the citation');

    if (text === null) {
      // The window prompt was cancelled.
      return;
    }

    change.call(wrapCitation, text);
  }
  onChange(change);
};

export const renderCitation = props => {
  const {
    attributes,
    children,
    node: { data },
    editor: { value, onChange },
  } = props;
  // const { data } = node;
  console.log({ data });
  const text = data.get('text');
  return (
    <SlateCitation
      {...attributes}
      label={text}
      onClickMarker={event => onClickCitation(event, value, onChange)}
    >
      {children}
    </SlateCitation>
  );
};
