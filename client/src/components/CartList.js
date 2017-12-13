import React,{Component} from 'react';
import {connect} from 'react-redux';
import {deleteCartItem} from '../actions/index';
import "../App.css";

class CartList extends Component {

	render() {
		// console.log(this.props.cart);
		if(this.props.cart.length===0) {
			return <h2>Loading</h2>;
		}
		return (
			<ul className="cart">
			{
				this.props.cart.map((img) => {
					return (
						<li 
								key={img._id}
								className="cart-item"
						>
							{img.path}
							<button onClick={() => this.props.deleteCartItem(img.originalname)}>
								Delete
							</button>
						</li>
					)
				})
			}
			</ul>
		);
	}
}

function mapStateToProps({cart}) {
	return {cart};
}

export default connect(mapStateToProps,{deleteCartItem})(CartList);