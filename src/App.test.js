import React from 'react';
import ReactDOM from 'react-dom';
import Forum from './components/Forum.react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Forum />, div);
  ReactDOM.unmountComponentAtNode(div);
});
