const mongoose = require("mongoose");

const { Schema } = mongoose;

const userImageSchema = new Schema({
	path: {
		type: String,
		required: true,
		trim: true
	},
	originalname: {
		type: String,
		required: true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}
});

mongoose.model("UserImage", userImageSchema);
