// @flow
import { SET_SEARCH_TERM } from './actions';

// formats input into useable action
export function setSearchTerm(searchTerm: string) {
	return { type: SET_SEARCH_TERM, payload: searchTerm };
}