import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const myTitle = 'My React with Webpack/Babel';

ReactDOM.render(
  <App title={myTitle} />,
  document.getElementById('app')
);

module.hot.accept();
