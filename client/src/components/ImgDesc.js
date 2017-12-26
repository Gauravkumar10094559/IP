import React,{Component} from "react";
import {addToCart} from '../actions/index';
import {connect } from 'react-redux';

class ImgDesc extends Component {

	myChange() {
		var change=document.querySelector('#SelectOptions').value;
		var price=document.querySelector('.price');
		if(change!=='Select Option') {
			price.innerText=change;
		} else {
			price.innerText=''; 
		}
		
		// console.log(change);
	}

	qtyChange() {
		var qtyValue=document.querySelector('.quantity');
		console.log(qtyValue.value);
	}

	handleClick(id) {
		// console.log(id);
		var change=document.querySelector('#SelectOptions').value;
		var qtyValue=document.querySelector('.quantity').value;
		var carry={};
		if(change!=='Select Option' && change!==undefined) {
			// console.log('change and qtyValue',change+'-'+qtyValue);
			carry['type']=change;
			carry['qty']=qtyValue;
			carry['id']=id;
			// console.log(carry);
			this.props.addToCart(carry);
		}
		else {
			alert('Please enter the select option');
		}
	}

	render() {
		// console.log(JSON.parse(this.props.location.pathname.slice(7)));
		var img = JSON.parse(this.props.location.pathname.slice(7));
		return (
			<div className="container">
				<div style={{marginTop:'100px'}}>
					<h2>{img.ProductTitle || ''}</h2>
					<h3>{img.category || ''}</h3>
				</div>
				<div className="imgDetails">
				<img src={img.imagelinks} alt={img.description} />
					<div className="imgCategory">
					<span>Price-<strong>Rs. 30.00- Rs. 90.00</strong></span>

					Size:
					<select id="SelectOptions" onChange={this.myChange.bind(this)}>
							<option defaultValue>Select Option</option>
							<option value="60.00">A3(12' X 18')</option>
							<option value="30.00">A4</option>
							<option value="90.00">Laptop Skin</option>
					</select>
					quantity:
					 <input className="quantity" type="number" name="quantity" min="1" defaultValue="1" onChange={this.qtyChange.bind(this)} />
					<span className="price"></span>
					<button onClick={this.handleClick.bind(this,img._id)}>
						Add to Cart
					</button>
					<p>Tags-{img.tags}</p>
					</div>

				</div>
			</div>
		);
	}

}

export default connect(null,{addToCart})(ImgDesc);
