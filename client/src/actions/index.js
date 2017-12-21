import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_PRODUCT } from "./types";
import { FETCH_LANDIMG } from "./types";
import { FETCH_USERIMG } from "./types";
import { FETCH_CART } from "./types";

export const submitform = (values,history) => async dispatch => {
	// console.log('history',history);
	const v=JSON.stringify(values);
	const res = await axios.post("/api/submitform/" + v + "",v);
	history.push('/user_account');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	// console.log(res);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLandingImages = () => async dispatch => {
	const res = await axios.get("/api/landImg");

	dispatch({ type: FETCH_LANDIMG, payload: res.data });
};

export const fetchProducts = prodName => async dispatch => {
	// console.log('index');
	const res = await axios.get("/api/current_product/" + prodName + "");

	// console.log('in index.js and at res',res);
	dispatch({ type: FETCH_PRODUCT, payload: res.data });
	return;
};

export const fetchUserImg = () => async dispatch => {
	// console.log("in fetchng");
	const res = await axios.get("/api/upload/img");

	dispatch({ type: FETCH_USERIMG, payload: res.data });
};

export const fetchCart = (history) => async dispatch => {
	const res = await axios.get("/api/cart");
	console.log('fetchCart res.data',res.data.error);
	if(res.data.error) {
		console.log('history',history);
		history.push('/');
	}
	dispatch({ type: FETCH_CART, payload: res.data });
};

export const deleteCartItem = item => async dispatch => {
	//use delete instead of get request
	const res = await axios.get("/api/cart/" + item + "");
	// console.log("res", res);
	dispatch({ type: FETCH_CART, payload: res.data });
};
