import React from 'react';

export default ({user}) =>{
	console.log(user);
	return (
		<div>
			<h3>Name</h3>{user?user.address.completed?user.address.name:'empty':'empty'}
			<h3>Email</h3>{user?user.address.completed?user.address.email:'empty':'empty'}
			<h3>Phone</h3>{user?user.address.completed?user.address.phone:'empty':'empty'}
			<h3>Address</h3>{user?user.address.completed?user.address.address:'empty':'empty'}
		</div>
	);
}