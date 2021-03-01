import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';

import {reduce} from './reduce';

const store = createStore(reduce, composeWithDevTools());

export default store;
