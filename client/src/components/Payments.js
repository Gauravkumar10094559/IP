import React,{Component} from 'react';
import Stripe from './Stripe';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

//now use withRouter  

// import {fetchCart} from '../actions/index';
import {updateUser,fetchCart} from '../actions/index';

class Payments extends Component{

	constructor(props) {
		super(props);
		this.state={
			sum:null
		} 
	}
 
	componentWillReceiveProps(newprops) {
		// console.log('newprops',newprops);
		var sum=0;
		newprops.cart.map((data)=> {
			return	sum+=Number(data.type)*data.quantity;
		})

		this.setState({
			sum
		});

	}

	componentWillMount() {
		this.props.fetchCart();
	}

	componentDidMount() {
		// this.props.updateUser()
	}

	render(){

		if(this.state.sum!==null) {
			this.props.updateUser(this.state.sum);

			return(
				<div style={{marginTop:'150px'}}>
					Choose Payment option
					The sum is:{this.state.sum}
					<ul>
							
						<li>CASH ON DELIVERY</li>
						<li><Stripe data={this.state.sum}/></li>

					</ul>

				</div>
			)
		}

		return (
			<div>Loading!!!</div>
		)

		// console.log(this.props.cart);
		// console.log(this.state.sum);

	}
}

function mapStateToProps({cart}) {
	return {cart};
}

export default connect(mapStateToProps,{updateUser, fetchCart})(Payments);
// export default connect(null,{updateUser,fetchCart})(Payments);