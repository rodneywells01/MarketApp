import React from 'react';
import ReactDOM from 'react-dom';
import WatchlistView from './WatchlistView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WatchlistView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
