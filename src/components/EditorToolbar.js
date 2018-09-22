import React from 'react';
import styled from 'styled-components';
import EditorToolbarButton from './EditorToolbarButton';

const Toolbar = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const EditorToolbar = ({ bold, underline, cite }) => {
  return (
    <Toolbar>
      <EditorToolbarButton
        active={bold.active}
        disabled={bold.disabled}
        onClick={bold.onClick}
      >
        bold
      </EditorToolbarButton>
      <EditorToolbarButton
        active={underline.active}
        disabled={underline.disabled}
        onClick={underline.onClick}
      >
        underline
      </EditorToolbarButton>
      <EditorToolbarButton
        active={cite.active}
        disabled={cite.disabled}
        onClick={cite.onClick}
      >
        cite
      </EditorToolbarButton>
    </Toolbar>
  );
};

export default EditorToolbar;
