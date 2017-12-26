import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCartItem } from "../actions/index";
import {Link } from 'react-router-dom';
import "../App.css";

class CartList extends Component {
	render() {
		console.log('this.props.cart',this.props.cart);
		if(this.props.cart===null) {
			return <h2>Loading</h2>;
		}
		if (this.props.cart.length === 0 ) {
			return <h2>Nothing to show</h2>;
		}
		return (
			<div>
				<ul className="cart">
					{this.props.cart.map(img => {
						return (
							<li key={img._id} className="cart-item">
								<p>Path:{img.path}</p>
								<p>Quantity:{img.quantity}</p>
								<button
									onClick={() =>
										this.props.deleteCartItem(img.originalname)}
								>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
				<Link to="/checkout">
					Go to checkout
				</Link>
			</div>
		);
	}
}

function mapStateToProps({ cart }) {
	return { cart };
}

export default connect(mapStateToProps, { deleteCartItem })(CartList);
