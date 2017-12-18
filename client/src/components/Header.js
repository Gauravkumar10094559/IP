import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
	renderUserStatus() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Sign in with Google </a>
						<a href="/auth/facebook">Sign in with facebook</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/api/Logout"> Logout</a>
					</li>
				);
		}
	}

	render() {
		// console.log(this.props);
		return (
			<nav className="nav">
				<Link to="/" className="header-brand">
					iskaPrint
				</Link>
				<ul className="header-list">
					<li className="dropdown">
						<span>POSTERS AND LAPTOP SKINS</span>
						<div className="dropdown-content">
							<ul>
								<li>
									<Link to="/product_category/Football/">
										Football
									</Link>
								</li>
								<li>
									<Link to="/product_category/Basketball">
										Basketball
									</Link>
								</li>
								<li>
									<Link to="/product_category/Cricket">
										Cricket
									</Link>
								</li>
								<li>
									<Link to="/product_category/Nature">
										Nature
									</Link>
								</li>
								<li>
									<Link to="/product_category/TVSeries">
										TV Series
									</Link>
								</li>
								<li>
									<Link to="/product_category/Music">
										Music
									</Link>
								</li>
								<li>
									<Link to="/product_category/Gaming">
										Gaming
									</Link>
								</li>
								<li>
									<Link to="/product_category/Superhero">
										Superhero
									</Link>
								</li>
								<li>
									<Link to="/product_category/Religious">
										Religious
									</Link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<Link to="/upload/img">UPLOAD YOUR IMAGE</Link>
					</li>
					<li>
						<Link to="/">SHOP</Link>
					</li>
					<li>
						<Link to="/cart">CART</Link>
					</li>
					<li>
						<Link to="/user_account">MY ACCOUNT</Link>
					</li>
					<li>
						<Link to="/">CONTACT US</Link>
					</li>
					{this.renderUserStatus()}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return {
		auth
	};
}

export default connect(mapStateToProps)(Header);
