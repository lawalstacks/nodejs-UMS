const Customer = require('../models/Customer');
const mongoose = require('mongoose');


/*
* GET /
/*customer routes*/

exports.homepage = async (req,res) =>  {
  const messages = await req.flash("info");
    const locals = {
      title: 'Free UMS',
      description: 'Free nodejs management system'
    }

    
    try{
      const customers = await Customer.find({}).limit(10);
      res.render('index',{locals,messages,customers});
    }catch(err){
      console.log("Unable to connect");
    }
    
}

/**
 * add customer
 */
exports.addCustomer = async (req,res) =>  {

try{
  const locals = {
    title: 'New user',
    description: 'Add new user to Free nodejs management system'
  }
  res.render('customer/add',locals);
}catch(err){res.sendStatus(404);}
}


/*
* POST /
/*create new customer*/

exports.postCustomer = async (req,res) =>  {

  console.log(req.body);

  const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    details: req.body.details,
    tel: req.body.telephone,
    email: req.body.email,
    details: req.body.details
  });
  
  try{
    await Customer.create(newCustomer);
    await req.flash('info', 'new customer added');
    res.redirect('/');
  }catch(err){
    console.log(err); 
  }

}

