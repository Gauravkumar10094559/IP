import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default props => {
	if (props.data.length === 0) {
		return <div>Loading</div>;
	}
	let url = "";
	return (
		<ul className="renderProdul">
			{props.data.map(function(img) {
				// url="/image/"+img.imagelinks+"/tags/"+img.tags+"";
				url = "/image/" + JSON.stringify(img) + "";
				// console.log(url);
				return (
					<li className="renderProdli" key={img.image}>
						<Link to={url}>
							<img src={img.imagelinks} alt={img.description} />
							{img.description}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
