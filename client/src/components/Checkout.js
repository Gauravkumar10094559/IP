import React,{Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCart} from '../actions/index';

class Checkout extends Component { 

	// constructor(props) {
	// 	super(props);
	// 	this.state={
	// 		sum:0
	// 	}
	// }

	componentWillMount() { 
		this.props.fetchCart();
	}

	// componentWillReceiveProps(newprops) {
	// 	// console.log('newprops',newprops);
	// 	var sum=0;
	// 	newprops.cart.map((data)=> {
	// 		return	sum+=Number(data.type)*data.quantity;
	// 	})
	// 	this.setState({
	// 		sum
	// 	})
	// }

	renderCart() {

		if(this.props.cart===null) {
			return <div>Loading</div>
		}
		var sum=0;
		return (
			<div>
				<ul>
					{this.props.cart.map((data)=> {
						sum+=Number(data.type)*data.quantity;
						return (
							<li 
								className="checkoutItem"
								key={data._id}
							>
								<p>Img:{data.path}</p>
								<p>Cost:{Number(data.type)*data.quantity}</p>
								<p>Quantity:{data.quantity}</p>
							</li>
						)
					})}
				</ul>

				<p>Total payable amount:<span className="sum">{sum}</span></p>
			</div>
		)
	}

	// handleClick() {

	// 	console.log(this.state.sum);

	// }

	render() {
		// console.log(this.props.auth.address);
		// console.log('this.props.cart',this.props.cart);

		if(!this.props.auth.address.completed) {
			return (
				<div>
					<h2>Oops look like you haven't submitted your info</h2>
					<p>Click down below to fill your info</p>
					<Link to="/user_account">Go to User Account </Link>
				</div>
			)
		}	

		var {address,email,name,phone}=this.props.auth.address;
	 
		return (
			<div style={{marginTop:'150px'}}>
				This is the Checkout page!!
				<p>Review your address for the last time before your order:</p>
				<ul>
					<li>Name:{name}</li>
					<li>Email:{email}</li>
					<li>Address:{address}</li>
					<li>Contact No:{phone}</li>
				</ul>
				<h1>Total amount to pay</h1>

				{this.renderCart()}
				
				<Link to="/payment">
					Order
				</Link>
			</div>
		);
	}
}

function mapStateToProps({auth,cart}) {
	return {auth,cart};
}

export default connect(mapStateToProps,{fetchCart})(Checkout);