import { SET_SEARCH_TERM } from './actions';
const DEFAULT_STATE = {
	searchTerm: ''
};

// Actions are essentially an object - this syntax is 'flux standard payload' & is a good standard to use (example below)
// {
// 	type: string,
// 	payload: 
// }

// creates new object (IMPORTANT) with new state.  DO NOT SIMPLY CHANGE EXISTING STATE.  It will do a shallow check, see it's the same object, and assume there are no updates (womp).
// this new object contains all the existing state, and overwrites the searchTerm
const setSearchTerm = (state, action) => {
	return Object.assign({}, state, { searchTerm: action.payload });
};


// root store - takes in action & state, returns state.  ZERO side effects.
// Root reducer must take care of default state (it is initially called with no state, so needs a default)
// Root Reducer must be able to handle unknown actions (action.type bit)
const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		default:
			return state;
	}
};

export default rootReducer;