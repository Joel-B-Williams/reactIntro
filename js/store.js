// @flow
import { createStore } from 'redux';
import reducer from './reducers';

// basic store - preeeetty simple.  Middleware & such would go here as well.

const store = createStore(reducer)

export default store;