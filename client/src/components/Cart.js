import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCart } from "../actions/index";
import CartList from "./CartList";

class Cart extends Component {
	componentWillMount() {
		this.props.fetchCart();
	}

	render() {
		// console.log(this.props.cart);
		return (
			<div>
				This is the user's cart everybody
				<ul>
					<CartList cart={this.props.cart} />
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ cart }) {
	return { cart };
}

export default connect(mapStateToProps, { fetchCart })(Cart);
