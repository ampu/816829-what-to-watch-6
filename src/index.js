import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store';
import {preload} from './store/operations';

import App from './components/app/app';

import './index.css';

store.dispatch(preload());

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.querySelector(`#root`));
