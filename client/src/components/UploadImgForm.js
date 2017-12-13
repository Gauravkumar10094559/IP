import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserImg } from "../actions/index";
import RenderUpload from "./RenderUpload";

class UploadForm extends Component {
	constructor(props) {
		super(props);
		// this.state={
		// 	link:''
		// }
		this.onButtonSubmit = this.onButtonSubmit.bind(this);
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
					Choose img to upload: <input type="file" name="userImage" />
					<input type="submit" name="submit" value="submit" />
				</form>
				<button onClick={this.onButtonSubmit}>show all images</button>
				<div>
					<RenderUpload data={this.props.userImg} />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ userImg }) {
	return { userImg };
}

export default connect(mapStateToProps, { fetchUserImg })(UploadForm);
