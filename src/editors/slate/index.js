import React from 'react';
import { Editor } from 'slate-react';
import { withState, compose } from 'recompose';
import EditorBody from '../../components/EditorBody';
import { SlateParagraph } from './components';
import { BoldConnected } from '../../components/Bold';
import Underline from '../../components/Underline';
import INITIAL_VALUE from './initialValue';
import EditorToolbar from '../../components/EditorToolbar';
import {
  CITATION,
  onClickCitation,
  renderCitation,
  hasCitation,
} from './citation';
import Paragraph from '../../components/Paragraph';
import { connect } from 'react-redux';
import { setHovered } from '../../App';

const renderNode = props => {
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
    case 'bold': {
      const highlight = props.editor.value.data.get('highlight');
      return <BoldConnected {...props} highlight={!highlight} />;
    }
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

const Slate = ({ state, onChange, hovered, dispatch }) => {
  const value = state.value.setIn(['data', 'highlight'], hovered);
  return (
    <div>
      <EditorToolbar
        bold={{}}
        underline={{}}
        cite={{
          active: hasCitation(value),
          onClick: event => onClickCitation(event, value, onChange),
        }}
      />
      <Paragraph>
        <span onClick={() => dispatch(setHovered(!hovered))}>
          <input type="checkbox" checked={hovered} /> highlight{' '}
          {hovered && 'YES'}
        </span>
      </Paragraph>
      <EditorBody>
        <Editor
          value={value}
          onChange={({ value }) => {
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

export const SlateStateful = compose(
  withState('state', 'onChange', {
    value: INITIAL_VALUE,
  }),
  connect(hovered => ({ hovered }))
)(Slate);
