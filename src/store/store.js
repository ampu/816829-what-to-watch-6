import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reduce} from './reduce';

const store = createStore(reduce, composeWithDevTools(applyMiddleware(thunk)));

export default store;
