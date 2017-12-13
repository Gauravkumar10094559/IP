import { combineReducers } from "redux";
import landingImgReducer from "./landImgReducer";
import authReducer from "./authReducer";
import prodReducer from "./prodReducer";
import userimgReducer from "./userimgReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
	landImg: landingImgReducer,
	auth: authReducer,
	products: prodReducer,
	userImg: userimgReducer,
	cart: cartReducer
});
