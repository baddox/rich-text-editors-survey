import React, { Component } from 'react';
import './App.css';
import EditorBody from './components/EditorBody';
import Paragraph from './components/Paragraph';
import Bold from './components/Bold';
import Italic from './components/Italic';
import { CitationStateful } from './components/Citation';
import EditorToolbar from './components/EditorToolbar';
import Button from './components/Button';
import EditorToolbarButton from './components/EditorToolbarButton';

const App = () => {
  return (
    <div>
      <h1>A Survey of Rich Text Editors</h1>
      <EditorToolbar>
        <EditorToolbarButton active>bold</EditorToolbarButton>
        <EditorToolbarButton disabled>italic</EditorToolbarButton>
      </EditorToolbar>
      <EditorBody>
        <Paragraph>
          This is a paragraph with some <Bold>bold</Bold> and{' '}
          <Italic>italic</Italic> text.
        </Paragraph>
        <Paragraph>
          This is another paragraph with{' '}
          <CitationStateful markerLabel="1">
            an inline citation
          </CitationStateful>{' '}
          and some other stuff.
        </Paragraph>
      </EditorBody>
    </div>
  );
};

export default App;
