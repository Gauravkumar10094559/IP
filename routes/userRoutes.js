const mongoose = require("mongoose");
const User = mongoose.model('User');
// const UserImage = mongoose.model('UserImage');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

    app.post('/api/updateUser',async(req,res)=> {

        // console.log(req.user.id);
        // console.log(req.body);
        // var {sum}=req.body;
        
        // var ordered={
        //     'payableAmount':sum
        // };

        // var newUser= await User.findOneAndUpdate(req.user.id,{
        //     $push:{
        //         'ordered':ordered
        //     }
        // },{
        //     new:true
        // });

        res.status(200).send('updated');


        // console.log('user',newUser);
        // res.redirect('/payment');
        // const id = [req.user.id];

        // const cart = await UserImage.find({
        //     owner: {
        //         $in: id
        //     }
        // });
        // console.log(cart);
        // res.send(cart);

    });


	// cannot get /user_account

  app.post('/api/submitform/:values',requireLogin,async (req,res)=>{
    // console.log(JSON.parse(req.params.values)); 
    // console.log(req.body); 
    var {name,email,phone,address}=JSON.parse(req.params.values);
    var Address={};
    Address['name']=name;
    Address['email']=email;
    Address['phone']=phone;
    Address['address']=address;
    Address['completed']=true;
    // console.log('Address',Address);
    // console.log(req.user.id);
    // address['name']=
    var newUser;
    try {
	    newUser= await User.findByIdAndUpdate(req.user.id,{
	    	$set: {
	    		address:Address
	    	}
	    }, {
            new:true
        });
        res.send(newUser);
	    // res.redirect('/user_account');
    } catch(err) {
    	throw err;
    }

  });

};