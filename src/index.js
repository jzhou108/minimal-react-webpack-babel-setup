/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const myAppTitle = `React with Webpack/Babel in ${process.env.NODE_ENV} mode`;

ReactDOM.render(
  <App appTitle={myAppTitle} />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);

module.hot.accept();
