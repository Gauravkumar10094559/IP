const express = require("express");
const app = express();
const keys = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser=require('body-parser');

require("./models/userImage");
require("./models/user");
require("./models/image");

// const routes = require('./routes/uploadImg');

require("./services/passport");

app.use(bodyParser.json());

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
require("./routes/billingRoutes")(app);

// console.log(__dirname);
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI,{useMongoClient:true});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log("Server has started");
});

