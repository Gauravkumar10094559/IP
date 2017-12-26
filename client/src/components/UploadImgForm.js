import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserImg } from "../actions/index";
import RenderUpload from "./RenderUpload";
import {Link } from 'react-router-dom';

class UploadForm extends Component {
	constructor(props) {
		super(props);
		this.state={
			visible:false
		}
		this.onButtonSubmit = this.onButtonSubmit.bind(this);
		this.qtyChange= this.qtyChange.bind(this);
	}

	componentWillReceiveProps(newProps) {
		// console.log(newProps.userImg);
		//loop through all the images not just once
		// this.setState({
		// 	link:newProps.userImg[0].path
		// })
	}

	onButtonSubmit(event) {
		event.preventDefault();
		this.props.fetchUserImg();
	}

    qtyChange() {
		// var qtyValue=document.querySelector('.quantity');
		// console.log(qtyValue.value);
	}


	myChange() {
		var change=document.querySelector('#SelectOptions').value;
		var price=document.querySelector('.price');

		var file=document.querySelector('input[name="userImage"]').value;
		// console.log(file);

		if(change!=='Select Option') {
			price.innerText=change;
		} else {
			price.innerText=''; 
			this.setState({
				visible:false
			})
		}

		if(file!=='' && price.innerText!=='') {
			this.setState({
				visible:true
			})
		}
	}

	render() {
		// console.log(__dirname);
		console.log("props value of userimg", this.props.userImg);

		return (
			<div className="uploadForm">
				<form
					action="/api/upload/img"
					method="POST"
					encType="multipart/form-data"
				>
					Choose img to upload: <input type="file" name="userImage" onChange={this.myChange.bind(this)} />
					Size:
					<select id="SelectOptions" name="posterType" onChange={this.myChange.bind(this)}>
							<option>Select Option</option>
							<option value="60.00">A3(12' X 18')</option>
							<option value="30.00">A4</option>
							<option value="90.00">Laptop Skin</option>
					</select>

					Price:<span className="price"></span>

					Enter the quantity:  <input className="quantity" type="number" name="quantity" min="1" max="20" defaultValue="1" onChange={this.qtyChange} />
					{
						this.state.visible
						?<button type="submit">
							submit
						 </button>
						:'Enter all the fields'
					}

					
				</form>

				<button onClick={this.onButtonSubmit}>See uploaded images</button>
				<div>
					<RenderUpload data={this.props.userImg} />
				</div>
				<div>
					<Link to="/cart" >
						Go to Cart
					</Link>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ userImg }) {
	return { userImg };
}

export default connect(mapStateToProps, { fetchUserImg })(UploadForm);
