// @flow
import { createStore, compose } from 'redux';
import reducer from './reducers';

// basic store - preeeetty simple.  Middleware & such would go here as well.

// add compose to check if devToolExtension is found - use it if so, otherwise do nothing (f => f === identity function; does nothing)
const store = createStore(reducer, compose(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
	)
);

export default store;