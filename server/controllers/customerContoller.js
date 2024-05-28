/*
* GET /
/*customer routes*/

exports.homepage = async (req,res) =>  {


    const locals = {
      title: 'Nodejs',
      description: 'Free nodejs management system'
    }
    res.render('index',locals);

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