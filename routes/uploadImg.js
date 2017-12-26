const multer = require("multer");
const mongoose = require("mongoose");
const UserImage = mongoose.model("UserImage");
const requireLogin = require('../middlewares/requireLogin');

//take care of the hardcoded url of uploads

module.exports = app => {
	// router.getImages = function (callback) {
	// 	UserImage.find(callback);
	// }

	// router.getImageById = function (id,callback) {
	// 	UserImage.findById(id,callback);
	// }

	// router.addImage = function (image, callback) {
	// 	UserImage.create(image,callback);
	// }
	// console.log('__dirname================',__dirname);
	var storage = multer.diskStorage({
		destination: function(req, file, cb) {
			// cb(null,'C:/Users/gaurav/workspace/iskaPrint/uploads')
			cb(null, "./uploads");//./uploads/userImg
		},
		filename: function(req, file, cb) {
			cb(null, file.originalname);
		}
	});

	var upload = multer({
		storage: storage
	});

	// router.get('/api/upload/img',function(req,res,next) {
	// 	res.render('index.ejs');
	// });

	app.post("/api/upload/img", requireLogin ,upload.any(), function(req, res, next) {	//upload.any() will save the image to uploads
		// console.log(req.files[0]);
		// console.log(req.user.id);
		// console.log(req.body);
		var {posterType,quantity}=req.body;
		var path = req.files[0].path;
		var imageName = req.files[0].originalname;
		var id = req.user.id;

		var imagepath = {};
		imagepath["path"] = path;
		imagepath["originalname"] = imageName;
		imagepath["quantity"] = quantity;
		imagepath["type"] = posterType;
		imagepath["owner"] = id;
		// console.log('__dirname',__dirnadme);
		// console.log('imagepath',imagepath);

		UserImage.create(imagepath, function(err, userimg) {
			if (err) {
				console.log(err);
			}
			// console.log( userimg);
			res.redirect("/upload/img");
			// res.send(userimg);
		});

		// router.addImage(imagepath,function(err) {
		// 	console.log(err);
		// });
	});

	app.get('/api/addToCart/:data', async (req,res) => {
		console.log(JSON.parse(req.params.data));
		var {type,qty,id}=JSON.parse(req.params.data);
		var imagepath = {};
		imagepath["path"] = id;
		imagepath["originalname"]='dbstoredimg'
		imagepath["quantity"] = qty;
		imagepath["type"] = type;
		imagepath["owner"] = req.user.id;
	  console.log('imagepath',imagepath);

		UserImage.create(imagepath, function(err, updated) {
			if (err) {
				console.log(err);
			}
			console.log( 'userimg',updated);
			res.redirect("/");
			// res.send(userimg);
		});
	});

	app.get("/api/upload/img", requireLogin ,async (req, res) => {
		const id = [req.user.id];
		// console.log(id);
		const response = await UserImage.find({
			owner: {
				$in: id
			}
		});
		// console.log('the one wwe want',response);
		res.send(response);
	});

	app.get("/api/showall/images", requireLogin ,function(req, res) {
		UserImage.find(function(err, genres) {
			if (err) {
				throw err;
			}
			res.json(genres);
		});
		// routes.getImages(function(err,genres) {
		// 	if(err){
		// 		throw err;
		// 	}
		// 	res.json(genres);
		// });
	});

	app.get("/api/img/:id",requireLogin ,function(req, res) {
		UserImage.findById(req.params.id, function(err, genres) {
			if (err) {
				throw err;
			}
			res.send(genres.path);
		});
		// routes.getImageById(req.params.id,function(err,genres) {
		// 	if(err){
		// 		throw err;
		// 	}
		// 	res.send(genres.path);
		// })
	});
};
