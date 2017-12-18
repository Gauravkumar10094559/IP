import _ from 'lodash';
import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import UserInfoField from './UserInfoField';
import formFields from './formFields';
import {submitform} from '../../actions/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class UserAccount extends Component {

	renderFields() {
		return _.map(formFields,({name,label,text}) => {
				return (
					<Field component={UserInfoField}
						   key={name}
						   type={text}
						   label={label}
						   name={name}

					/>
				)
			})
	}

	render() {
		// console.log('this.props.history',this.props.history);
		console.log('this.props.status',this.props.status);
		return(
			<div style={{'marginTop':'150px'}}>
				
				<h2>
					{this.props.status} you info!
				</h2>
				
				<form
					onSubmit={this.props.handleSubmit(()=> this.props.submitform(this.props.formValues,this.props.history))}
				>
					{this.renderFields()}
					<button
						type="submit"
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors={};

	_.each(formFields,({name})=>{
		if(!values[name]) {
			errors[name]='You must provide a value';
		}
	});

	return errors;
}

function mapStateToProps(state) {
	// console.log('state',state);
	return {
		formValues:state.form.userInfoForm.values
	};
}

UserAccount=connect(	//thats how the action creator is used with the redux form
	mapStateToProps,
	{submitform}
)(withRouter(UserAccount));

export default reduxForm({
	validate,
	form:'userInfoForm'	//a unique name for the form
})(UserAccount);