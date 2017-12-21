const mongoose = require("mongoose");
const User = mongoose.model('User');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {


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