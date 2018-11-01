import React from 'react';
import ReactDOM from 'react-dom';
import MemberDisplay from './MemberDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemberDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
