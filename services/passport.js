const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");

// console.log(__dirname);
// const image = mongoose.model('Image');
// const UserImg = mongoose.model('UserImage');

// UserImg.create({
// 	path:'adfa',
// 	originalname:'adfas'
// },function(err,userimg) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log('user img');
// 		console.log(userimg);
// 	}
// })

// image.create({
// 	ProductTitle: 'String',
// 	GROUPID:'String',
// 	description:'String',
// 	image:'String',
// 	imagelinks:'String',
// 	category:'String',
// 	tags:'String'
// },function(err,img) {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log('new img');
// 		console.log(img);
// 	}
// });

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			proxy: true,
			callbackURL: "/auth/google/callback"
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({
				googleId: profile.id
			});

			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({
				googleId: profile.id
			}).save();

			done(null, user);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			proxy: true,
			callbackURL: "/auth/facebook/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({
				facebookId: profile.id
			}).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({
						facebookId: profile.id
					})
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
