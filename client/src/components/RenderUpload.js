import React,{Component} from 'react';
import "../App.css";

export default (props) => {
	console.log('render upload',props.data);
	if(props.data.length===0) {
		return <h2>Waiting</h2>;
	}

	return(
		<ul className="renderProdul">
			{
				props.data.map((uploaded) => {
					return (
						<li 
							className="renderProdli"
							key={uploaded._id}>
							{uploaded.path}
						</li>
					);
				})
			}
		</ul>
	);
};
