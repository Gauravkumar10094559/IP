import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/";
import RenderProd from './RenderProd';
import "../App.css";

class Product extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		prevProp: this.props.match.params.type,
	// 		call: true
	// 	};
	// }

	componentWillReceiveProps(newProps) {
		if(newProps.match.params.type!==this.props.match.params.type) {
			this.props.fetchProducts(newProps.match.params.type);
			// console.log('in recieveProps');
		}
	}

	componentWillMount() {
		// if (this.props.match.params.type !== this.state.prevProp) {
		// 	this.setState({
		// 		call: true
		// 	});
		// }
		// console.log('in componentWillMount');
		this.props.fetchProducts(this.props.match.params.type);
		// console.log(this.props.products);
	}

	// renderProd(type) {
	// 	this.props.fetchProducts(type);
	// 	this.setState({
	// 		call: false,
	// 		prevProp: type
	// 	});
	// }

	render() {
		let type = this.props.match.params.type;
		// if(this.state.call) {
		// 	this.renderProd(type);
		// }
		return (
			<div>
				<h1 className="productHeader">Category -{type}</h1>
				<RenderProd
					data={this.props.products}
				/>
			</div>
		);
	}
}

function mapStateToProps({ products }) {
	return { products };
}

export default connect(mapStateToProps, { fetchProducts })(Product);
