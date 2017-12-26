const keys= require('../config/keys');
const stripe=require('stripe')(keys.stripeSecretKey);
const requireLogin=require('../middlewares/requireLogin');
const mongoose = require("mongoose");
const User = mongoose.model('User');
const UserImage = mongoose.model('UserImage');

module.exports=app=>{

	app.post('/api/stripe',requireLogin,async(req,res)=> {

		// console.log('req.body',req.body); 
		// console.log('req.body',stripe); 

		try{
		var {sum}=req.body;
		const charge=await stripe.charges.create({
				amount:sum,
				currency:'usd',
				description:`${sum} for iskaprint`,
				source:req.body.token.id
			});
 
 		const id = [req.user.id];
		
		const response = await UserImage.find({
			owner: {
				$in: id
			}
		});

		//using the response collect the id's of all the docs

		var imgRes=[];
        response.forEach((doc) => {
        	imgRes.push(doc._id);
        });

        // console.log(imgRes);

        var ordered={
            'paid':true,
       		'payableAmoutnt':sum,
            'method':'Payment via Stripe',
            'images':imgRes
        };

        var newUser= await User.findOneAndUpdate(req.user.id,{ 
            $push:{
                'ordered':ordered
            }
        },{
            new:true
        });
		console.log('newUser',newUser);
        

		console.log('charged the user');
		res.send(newUser);

		}

		catch(err) {
			console.log(err);
		}

	});

};