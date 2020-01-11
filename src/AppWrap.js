import React from 'react';
import { StateInspector } from 'reinspect';
import App from './App';

function AppWrap() {
  return (
    <StateInspector name="App">
      <App id="unique-id" />
    </StateInspector>
  );
}

export default AppWrap;
