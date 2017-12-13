const multer = require('multer');
const mongoose = require('mongoose');
const UserImage = mongoose.model('UserImage');


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

	
 
	var storage = multer.diskStorage({
		destination:function(req,file,cb) {
			// cb(null,'C:/Users/gaurav/workspace/iskaPrint/uploads')
			cb(null,'C:/Users/gaurav/workspace/iskaPrint/uploads')
		},
		filename:function(req,file,cb) {
			cb(null, file.originalname);
		}
	});

	var upload = multer({
		storage:storage
	});

	// router.get('/api/upload/img',function(req,res,next) {
	// 	res.render('index.ejs');
	// });
	
	app.post('/api/upload/img',upload.any(),function(req,res,next) {
		// console.log(req.files[0]);
		// console.log(req.user.id);
		
		var path = req.files[0].path;
		var imageName = req.files[0].originalname;
		var id=req.user.id;
		

		var imagepath = {};
		imagepath['path'] = path;
		imagepath['originalname'] = imageName;
		imagepath['owner'] = id;
		// console.log('__dirname',__dirnadme);
		// console.log('imagepath',imagepath);

		UserImage.create(imagepath,function(err,userimg) {
			if(err) {
				console.log(err);
			}
			// console.log(typeof userimg);
			res.redirect('/upload/img');
			// res.send(userimg);
		});
		

		// router.addImage(imagepath,function(err) {
		// 	console.log(err);
		// });

	});

	app.get('/api/upload/img',async (req,res)=> {
		const id=[req.user.id];
		// console.log(id);
		const response = await UserImage.find({
			"owner":{
				"$in":id
			}
		});
		// console.log('the one wwe want',response);
		res.send(response);
	});

	 

	app.get('/api/showall/images',function(req,res) {
		UserImage.find(function(err,genres) {
			if(err) {
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

	app.get('/api/img/:id',function(req,res) {
			UserImage.findById(req.params.id,function(err,genres) {
				if(err) {
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
	})

};
