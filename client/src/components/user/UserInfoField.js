import React from 'react';

export default ({input,label,meta:{error,touched}}) => {	//error will take value from validate function
	// console.log(props.meta);
	// console.log(input);
	return (
		<div>
			<label style={{marginRight:'30px'}}>{label}</label>
			{
				input.name==='address'?<textarea  {...input} ></textarea>:<input {...input} />
			}


			<div>
				{touched && error}
			</div>
		</div>
	); 
}