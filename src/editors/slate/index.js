import React from 'react';
import { Editor } from 'slate-react';
import { withState } from 'recompose';
import EditorBody from '../../components/EditorBody';
import { SlateParagraph, SlateCitation } from './components';
import Bold from '../../components/Bold';
import Underline from '../../components/Underline';
import INITIAL_VALUE from './initialValue';
import EditorToolbar from '../../components/EditorToolbar';
import {
  CITATION,
  onClickCitation,
  renderCitation,
  hasCitation,
} from './citation';

const renderNode = props => {
  console.log({ props });
  const {
    node: { type },
    attributes,
    children,
  } = props;
  switch (type) {
    case 'paragraph':
      return <SlateParagraph {...attributes}>{children}</SlateParagraph>;
    case CITATION:
      return renderCitation(props);
  }
};

const renderMark = props => {
  switch (props.mark.type) {
    case 'bold':
      return <Bold {...props} />;
    case 'underline':
      return <Underline {...props} />;
  }
};

const onKeyDown = (event, change) => {
  if (!event.ctrlKey) return;

  switch (event.key) {
    case 'b': {
      event.preventDefault();
      change.addMark('bold');
      return true;
    }
    case 'u': {
      event.preventDefault();
      change.addMark('underline');
      return true;
    }
  }
};

const Slate = ({ state, onChange }) => {
  return (
    <div>
      <EditorToolbar
        bold={{}}
        underline={{}}
        cite={{
          active: hasCitation(state.value),
          onClick: event => onClickCitation(event, state.value, onChange),
        }}
      />
      <EditorBody>
        <Editor
          value={state.value}
          onChange={({ value }) => {
            console.log(value);
            onChange({ value });
          }}
          renderNode={renderNode}
          renderMark={renderMark}
          onKeyDown={onKeyDown}
        />
      </EditorBody>
    </div>
  );
};

export default Slate;

export const SlateStateful = withState('state', 'onChange', {
  value: INITIAL_VALUE,
})(Slate);
