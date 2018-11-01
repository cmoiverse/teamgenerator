import React from 'react';
import ReactDOM from 'react-dom';
import TeamForm from './TeamForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
