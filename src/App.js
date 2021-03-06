import React, { Component } from 'react';
import './App.css';
import EditorBody from './components/EditorBody';
import Paragraph from './components/Paragraph';
import Bold from './components/Bold';
import Underline from './components/Underline';
import { CitationStateful } from './components/Citation';
import EditorToolbar from './components/EditorToolbar';
import { SlateStateful } from './editors/slate';
import EditorSection from './components/EditorSection';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore((state = false, action) => {
  return !!action.hovered;
});

export const setHovered = hovered => ({ type: 'SET_HOVERED', hovered });

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>A Survey of Rich Text Editors</h1>
        <EditorSection>
          <h2>Slate.js</h2>
          <SlateStateful />
        </EditorSection>
        <EditorSection>
          <h2>Static Demo</h2>
          <EditorToolbar bold={{}} underline={{}} cite={{}} />
          <EditorBody>
            <Paragraph>
              This is a paragraph with some <Bold>bold</Bold> and{' '}
              <Underline>underlined</Underline> text.
            </Paragraph>
            <Paragraph>
              This is another paragraph with{' '}
              <CitationStateful label="1">an inline citation</CitationStateful>{' '}
              and some other stuff.
            </Paragraph>
          </EditorBody>
        </EditorSection>
      </div>
    </Provider>
  );
};

export default App;
