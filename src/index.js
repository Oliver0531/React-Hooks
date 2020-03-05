import './stylesheet.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalState from './context/GlobalState';

ReactDOM.render(
  <GlobalState />,
  document.getElementById('root')
);

