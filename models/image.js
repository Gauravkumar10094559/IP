const mongoose = require("mongoose");

const { Schema } = mongoose;

// imageSchema.virtual('getCategory').get(function(name) {
// 	return this.ProductTitle.split(' ')[0]==name;
// });

const imageSchema = new Schema({
	ProductTitle: String,
	GROUPID: String,
	description: String,
	image: String,
	imagelinks: String,
	category: String,
	tags: String
});

mongoose.model("Image", imageSchema);
