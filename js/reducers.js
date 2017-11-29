// @flow
import { SET_SEARCH_TERM } from './actions';
import { combineReducers } from 'redux';
// no longer need full default state when combining reducers
// const DEFAULT_STATE = {
// 	searchTerm: ''
// };

// Actions are essentially an object - this syntax is 'flux standard payload' & is a good standard to use (example below)
// {
// 	type: string,
// 	payload: 
// }

// creates new object (IMPORTANT) with new state.  DO NOT SIMPLY CHANGE EXISTING STATE.  It will do a shallow check, see it's the same object, and assume there are no updates (womp).
// this new object contains all the existing state, and overwrites the searchTerm
// const setSearchTerm = (state, action) => {
// 	return Object.assign({}, state, { searchTerm: action.payload });
// };

// by using combineReducers each reducer only cares about its own piece of state - searchTerm's default is empty string, action is the Action type added for to types.js
const searchTerm = (state='', action: Action) => {
	if (action.type === SET_SEARCH_TERM) {
		return action.payload;
	}
	return state;
};


// root reducer - takes in action & state, returns state.  ZERO side effects.
// Root reducer must take care of default state (it is initially called with no state, so needs a default)
// Root Reducer must be able to handle unknown actions (action.type bit)
// const rootReducer = (state = DEFAULT_STATE, action) => {
// 	switch (action.type) {
// 		case SET_SEARCH_TERM:
// 			return setSearchTerm(state, action);
// 		default:
// 			return state;
// 	}
// };
// combined-ness gives us a helpful method to build the root reducer
// NOTE - es6 allows you to replace ({searchTerm: searchTerm}) with ({searchTerm}), which is why it can be nice to name individual reducers after their state-name
const rootReducer = combineReducers({ searchTerm })

export default rootReducer;