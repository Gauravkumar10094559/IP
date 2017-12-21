import React from "react";

export default props => {


	function myChange() {
		var change=document.querySelector('#SelectOptions').value;
		var price=document.querySelector('.price');
		if(change!=='Select Option') {
			price.innerText=change;
		} else {
			price.innerText='';
		}
		
		// console.log(change);
	}

	function qtyChange() {
		var qtyValue=document.querySelector('.quantity');
		console.log(qtyValue.value);
	}

	function handleClick() {
		var change=document.querySelector('#SelectOptions').value;
		if(change!=='Select Option' && change!==undefined) {
			console.log('okay go to the cart');//now make an action creator that will add this to the db of that user and run requireLogin there and on add to cart btn if need be
		}
		else {
			alert('Please enter the select option');
		}
	}

	// console.log(JSON.parse(props.location.pathname.slice(7)));
	const img = JSON.parse(props.location.pathname.slice(7));
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
				<select id="SelectOptions" onChange={()=> myChange()}>
						<option defaultValue>Select Option</option>
						<option value="60.00">A3(12' X 18')</option>
						<option value="30.00">A4</option>
						<option value="90.00">Laptop Skin</option>
				</select>
				quantity:
				 <input className="quantity" type="number" name="quantity" min="1" defaultValue="1" onChange={()=> qtyChange()} />
				<span className="price"></span>
				<button onClick={()=> handleClick()}>
					Add to Cart
				</button>
				<p>Tags-{img.tags}</p>
				</div>

			</div>
		</div>
	);
};
