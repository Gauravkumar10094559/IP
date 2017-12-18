const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	facebookId: String,
	address:{
		name:String, 
		email:String,
		phone:Number,
		address:String,
		completed:{
			type:Boolean,
			default:false
		}
	}
});

mongoose.model("User", userSchema);
