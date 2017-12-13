const mongoose = require("mongoose");
const UserImage = mongoose.model("UserImage");

module.exports = app => {

	app.get('/api/cart', async (req,res) => {
		const id=[req.user.id];
		const cart = await UserImage.find({
			"owner":{
				"$in":id
			}
		});
		res.send(cart);
	});

	app.get('/api/cart/:item', async (req,res) => {
		console.log('item',req.params);
		const deleted = await UserImage.find({originalname:req.params.item}).remove().exec();
		const id=[req.user.id];
		const cart = await UserImage.find({
			"owner":{
				"$in":id
			}
		});

		res.send(cart);
	});

	// app.route('/api/cart/item/:img')
	// 	.delete(async (req,res) => {
	// 		console.log('deleting');
	// 		const response = await UserImage.find({originalname:req.params.img}).remove().exec();
	// 		res.redirect('/');
	// 	})
	// 	.get((req,res) => {
	// 		// req.method='GET';
	// 		console.log('re routing');
	// 		res.send('deleting routes');
	// 	});




};
 