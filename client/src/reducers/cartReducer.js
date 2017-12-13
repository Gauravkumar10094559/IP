import { FETCH_CART } from "../actions/types";

export default function(state = [], action) {
	// console.log('inside reducer');
	switch (action.type) {
		case FETCH_CART:
			return action.payload || false;
		default:
			return state;
	}
}
