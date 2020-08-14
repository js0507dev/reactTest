import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Root from 'routes/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

serviceWorker.unregister();
