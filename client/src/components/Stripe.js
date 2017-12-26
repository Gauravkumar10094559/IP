import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Stripe extends Component {
	render() {
		console.log('pay',this.props.data);
		return(
			<StripeCheckout
				name="IskaPrint"
				description="Make payment to IskaPrint"
				amount={this.props.data}
				token={token=> this.props.handleToken(token,this.props.data)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">
					Pay
				</button>
			</StripeCheckout>
		);
	}
}

export default connect(null,actions)(Stripe);