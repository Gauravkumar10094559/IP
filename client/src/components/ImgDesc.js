import React from 'react';

export default (props) => {

	// console.log(JSON.parse(props.location.pathname.slice(7)));
	const img=JSON.parse(props.location.pathname.slice(7));
	return (
		<div className="imgDetails">
			<img src={img.imagelinks} alt={img.description} />
			Tags-{img.tags}
		</div>
	);
};