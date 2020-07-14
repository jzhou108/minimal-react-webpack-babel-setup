import React from 'react';
import styles from './style.css';

// eslint-disable-next-line import/extensions
import TwitterIcon from './Icons/Twitter.js';
// eslint-disable-next-line import/extensions
import FacebookIcon from './Icons/Facebook.js';
// eslint-disable-next-line import/extensions
import WeichatIcon from './Icons/Weichat.js';

const App = ({ appTitle }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <div className={styles.title}>{appTitle}</div>
    <div>
      <ul>
        <li>
          <TwitterIcon width="40px" height="40px" />
          <a href="https://twitter.com">Twitter</a>
        </li>
        <li>
          <FacebookIcon width="40px" height="40px" />
          <a href="https://www.facebook.com">Facebook</a>
        </li>
        <li>
          <WeichatIcon width="40px" height="40px" />
          <a href="https://wx.qq.com">Wechat</a>
        </li>
      </ul>
    </div>
  </>
);
App.propTypes = {
  appTitle: String.isRequired,
};

export default App;
