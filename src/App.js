import React from 'react';

// eslint-disable-next-line react/jsx-filename-extension
const App = ({ appTitle }) => <div>{appTitle}</div>;
App.propTypes = {
  appTitle: String.isRequired,
};

export default App;
