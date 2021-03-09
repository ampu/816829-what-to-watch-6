import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/store';
import {preload} from './store/operations/preload';

import App from './components/app/app';

import './index.css';

store.dispatch(preload());

ReactDOM.render((
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </React.StrictMode>
), document.querySelector(`#root`));
