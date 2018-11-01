
import React from 'react';
import ReactDOM from 'react-dom';
import MemberForm from './MemberForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemberForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
