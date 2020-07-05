import React from 'react';
import styles from './style.css';

const App = ({ appTitle }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className={styles.title}>{appTitle}</div>
);
App.propTypes = {
  appTitle: String.isRequired,
};

export default App;
