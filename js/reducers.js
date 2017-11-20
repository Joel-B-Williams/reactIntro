const DEFAULT_STATE = {
	searchTerm: ''
};

// root store - takes in action & state, returns state.  ZERO side effects.
// Root reducer must take care of default state (it is initially called with no state, so needs a default)
// Root Reducer must be able to handle unknown actions (action.type bit)
const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		default:
		return state;
	}
};

export default rootReducer;