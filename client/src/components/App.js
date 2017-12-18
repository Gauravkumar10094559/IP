import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Product from "./Product";
import ImgDesc from "./ImgDesc";
import UploadImgForm from "./UploadImgForm";
import Cart from "./Cart";
import UserDetails from "./UserDetails";
import "../App.css";

// const UserDetails = () => {
// 	return <h2> Users Account</h2>;
// };

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		// console.log(this.props);
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route
							
							path="/product_category/:type"
							component={Product}
						/>
						<Route
							
							path="/user_account"
							component={UserDetails}
						/>
						<Route
							
							path="/upload/img"
							component={UploadImgForm}
						/>
						<Route  path="/cart" component={Cart} />
						<Route  path="/image/:link" component={ImgDesc} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
