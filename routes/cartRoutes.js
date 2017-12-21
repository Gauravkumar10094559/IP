const fs= require('fs');
const mongoose = require("mongoose");
const UserImage = mongoose.model("UserImage");
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {


	app.get("/api/cart", requireLogin, async (req, res) => {
		const id = [req.user.id];
		const cart = await UserImage.find({
			owner: {
				$in: id
			}
		});
		res.send(cart);
	});

	app.get("/api/cart/:item", requireLogin ,async (req, res) => {


		 
		//  fs.stat(req.params, function (err, stats) {
		//    console.log(stats);//here we got all information of file in stats variable

		//    if (err) {
		//        return console.error(err);
		//    }
			 
		   fs.unlink('./uploads/'+req.params.item,function(err){
		        if(err) return console.log(err);
		        console.log('file deleted successfully');
		   });  
		// });


		// console.log("item=========", req.params);
		const deleted = await UserImage.find({ originalname: req.params.item })
			.remove()
			.exec();
		const id = [req.user.id];
		const cart = await UserImage.find({
			owner: {
				$in: id
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
