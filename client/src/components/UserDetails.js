import React , {Component } from 'react';
import UserAccount from './user/UserAccount';
import UserSavedInfo from './user/UserSavedInfo';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/index';


class UserDetails extends Component {
	render() {
		return (
			<div style={{marginTop:'150px'}}>
				UserDetails
				<UserSavedInfo user={  this.props.auth }/>
				<UserAccount status={	this.props.auth?this.props.auth.address.completed?'update':'enter':'enter'}/>
			</div>
		);
	}
}

function mapStateToProps({auth}) {
	return {
		auth
	};
}

export default connect(mapStateToProps,{fetchUser})(UserDetails);