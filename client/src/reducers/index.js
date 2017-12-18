import { combineReducers } from "redux";
import landingImgReducer from "./landImgReducer";
import authReducer from "./authReducer";
import prodReducer from "./prodReducer";
import userimgReducer from "./userimgReducer";
import cartReducer from "./cartReducer";
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
	landImg: landingImgReducer,
	auth: authReducer,
	products: prodReducer,
	userImg: userimgReducer,
	cart: cartReducer,
	form:reduxForm
});
