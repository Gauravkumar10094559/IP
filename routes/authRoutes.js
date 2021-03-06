const passport = require("passport");

module.exports = app => {
	app.get("/", (req, res) => {
		res.send("App has started");
	});

	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/user_account");
		}
	);

	app.get(
		"/auth/facebook",
		passport.authenticate("facebook", {
			scope: ["public_profile", "email"]
		})
	);

	app.get(
		"/auth/facebook/callback",
		passport.authenticate("facebook"),
		(req, res) => {
			res.redirect("/user_account");
		}
	);

	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	app.get("/api/current_user", (req, res) => {
		// console.log(req.user);
		res.send(req.user);
	});
};
