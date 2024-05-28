require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const app = express();
const  port = process.env.PORT || 5000

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static files

app.use(express.static('public'));


//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

connectDB();
//routes
app.use('/', require('./server/routes/customer'));

//Home

//handle 404
app.get('*', (req,res) =>{
  res.status(404).render('404'); 
})
 
app.listen(port, ()=>{
  console.log(`App running on port ${port}`);
}); 