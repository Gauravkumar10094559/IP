const mongoose = require("mongoose");
const Image = mongoose.model("Image");

module.exports = app => {
	app.get("/api/landImg", async (req, res) => {
		//improve this bit of code (use one mongoose query)
		try {
			let Cricket = await Image.find({ ProductTitle: "Cricket" }).limit(
				4
			);
			let Music = await Image.find({ ProductTitle: "Music" }).limit(4);
			let TVSeries = await Image.find({ ProductTitle: "TVSeries" }).limit(
				4
			);
			let Gaming = await Image.find({ ProductTitle: "Gaming" }).limit(4);

			let response = {
				Cricket,
				Music,
				TVSeries,
				Gaming
			};
			// console.log(response);
			res.send(response);
		} catch (err) {
			throw err;
		}
	});

	app.get("/api/current_product/:prodName", async (req, res) => {
		console.log("again");

		try {
			let images = await Image.find({
				ProductTitle: req.params.prodName
			});
			// console.log(typeof images);
			res.send(images);
			// console.log(req.params);

			// const images = await Image.find({} , function(err,images) {
			// 	const myImages=[];
			// 	//console.log(images);
			// 	// console.log(req.params.prodName);
			// 	images.forEach(function(img) {
			// 		// console.log(img.ProductTitle);

			// 		if(img.ProductTitle==req.params.prodName) {
			// 			myImages.push(img);
			// 		}
			// 	});
			// 	// console.log(myImages);
			// 	res.send(myImages);
			// });
		} catch (err) {
			throw err;
		}
	});
};
