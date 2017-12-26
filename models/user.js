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
	},
	ordered:[
		{
			paid:{
				type:Boolean,
				default:false 
			},
			method:{
				type:String
			},
			payableAmount:{
				type:Number
			},
			images:[
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: "UserImage"	
				}
			]
		}
	]
});

mongoose.model("User", userSchema);
