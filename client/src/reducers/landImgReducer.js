import { FETCH_LANDIMG } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_LANDIMG:
			return action.payload;

		default:
			return state;
	}
}

// export default function() {
// 	return [
// 		{ imgId:'KoKAXLKJwhk' },
// 		{ imgId:'BS5kXq5jRL8' },
// 		{ imgId:'jw3GOzxiSkw' },
// 		{ imgId:'p2qV59YpdfU' },
// 		{ imgId:'gM9TPD4k_0g' },
// 		{ imgId:'ufWjkFmTNXo' },
// 		{ imgId:'dR0kfA2vK54' },
// 		{ imgId:'-YGdiRcY9Sc' },
// 		{ imgId:'zzfUqy5bdwo' },
// 		{ imgId:'jZxairpkhho' }
// 	]
// }
