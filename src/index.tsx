import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';
import { DataLayer } from './services/dataLayer/dataLayer'
import { initialState } from './services/dataLayer/reducer'
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
