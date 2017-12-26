import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLandingImages } from "../actions/";

//clean up the code to much repition

class Landing extends Component {
	componentDidMount() {
		this.props.fetchLandingImages();
	}

	// componentWillReceiveProps(newProps){
	// 	console.log(this.props.landImg);
	// }

	renderImages(type) {
		if (this.props.landImg.length === 0) {
			return <div>Loading</div>;
		}
		let url = "";
		switch (type) {
			case "Cricket":
				return this.props.landImg.Cricket.map(img => {
					url = "/image/" + JSON.stringify(img) + "";
					return (
						<Link to={url} key={img.image}>
							<img
								alt={img.image}
								className="landing-image"
								
								src={img.imagelinks}
							/>
						</Link>
					);
				});
			case "Music":
				return this.props.landImg.Music.map(img => {
					url = "/image/" + JSON.stringify(img) + "";
					return (
						<Link to={url} key={img.image}>
							<img
								alt={img.image}
								className="landing-image"
								
								src={img.imagelinks}
							/>
						</Link>
					);
				});
			case "TVSeries":
				return this.props.landImg.TVSeries.map(img => {
					url = "/image/" + JSON.stringify(img) + "";
					return (
						<Link to={url} key={img.image}>
							<img
								alt={img.image}
								className="landing-image"
								
								src={img.imagelinks}
							/>
						</Link>
					);
				});
			case "Gaming":
				return this.props.landImg.Gaming.map(img => {
					url = "/image/" + JSON.stringify(img) + "";
					return (
						<Link 
							to={url}
							key={img.image}
						>
							<img
								alt={img.image}
								className="landing-image"
								
								src={img.imagelinks}
							/>
						</Link>
					);
				});
			default:
				return <div>Sorry for the inconvinience!</div>;
		}
	}

	// https://source.unsplash.com/PoD5OldJQMQ/1600x900

	render() {
		// console.log(this.props.landImg);
		return (
			<div>
				<div className="landing">
					<h2>PRINT YOUR DREAMS</h2>
					<p>DESIGN YOUR LIFE</p>
				</div>
				<div className="landing-images">
					{this.renderImages("Cricket")}
				</div>
				<div className="landing-images">
					{this.renderImages("Music")}
				</div>
				<div className="landing-images">
					{this.renderImages("TVSeries")}
				</div>
				<div className="landing-images">
					{this.renderImages("Gaming")}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ landImg }) {
	return {
		landImg
	};
}

export default connect(mapStateToProps, { fetchLandingImages })(Landing);
