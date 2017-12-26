const mongoose = require("mongoose");

const { Schema } = mongoose;

const userImageSchema = new Schema({
	quantity:{
		type:Number,
		required:true
	},
	path: {
		type: String,
		required: true,
		trim: true
	},
	originalname: {
		type: String,
		required: true
	},
	type:{
		type:String,
		required:true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}
});

mongoose.model("UserImage", userImageSchema);
