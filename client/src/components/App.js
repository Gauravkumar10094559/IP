import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
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

const Login = () => {
	return <h2 style={{marginTop:'100px'}}> Please Sign in to do that!! </h2>;
};

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		// console.log('this.props.auth',this.props.auth);

		const PrivateRoute = ({component:Component,...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.auth
				?<Component {...props} />
				: <Redirect to="/login" />
				)} />
		)

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

						<PrivateRoute
							
							path="/user_account"
							component={UserDetails}
						/>
						<PrivateRoute
							
							path="/upload/img"
							component={UploadImgForm}
						/>

						<PrivateRoute  path="/cart" component={Cart} />

						<Route  path='/login' component={Login} />
						<Route  path="/image/:link" component={ImgDesc} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

function mapStateToProps({auth}) {
	return {auth};
}

export default connect(mapStateToProps, actions)(App);
