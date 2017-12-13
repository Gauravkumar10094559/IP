import {FETCH_USERIMG} from '../actions/types';

export default function (state=[], action ) {
	switch(action.type) {
		case FETCH_USERIMG:
			return action.payload;

		default:
			return state;
	}
}
