const express = require("express");
const app = express();
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./models/userImage");
require("./models/user");
require("./models/image");

// const routes = require('./routes/uploadImg');

require("./services/passport");

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());
// app.use('/api/upload/img',routes);

require("./routes/authRoutes")(app);
require("./routes/productRoutes")(app);
require("./routes/uploadImg")(app);
require("./routes/cartRoutes")(app);
require("./routes/userRoutes")(app);

// console.log(__dirname);
mongoose.connect(keys.mongoURI,{useMongoClient:true});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log("Server has started");
});

// --allow-file-access-from-files

//also delete the images from the server when the user delete it from the database
//after conforming the cart selections show a page where user can upload address and contact details and add these fields in user schema
//then start the payment or cod option on the order
//after conforming the order and payment send out an email
//in users account show details of account like contact address and everything with payment details( implementation  in  a distant future) also make change in passport
//services such that the google and facebook will provide the username as well

//Implement comment model as well for every image ?? (implementation in future)

//and use lodash for easy use of loops on arrays and objects
