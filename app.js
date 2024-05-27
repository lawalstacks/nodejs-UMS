require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');

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

//Home 

app.get('/', (req,res) => {

  const locals = {
    title: 'Nodejs',
    description: 'Free nodejs management system'
  }
  res.render('index',locals);
})

app.get('*', (req,res) =>{
  res.status(404).render('404'); 
})
 
app.listen(port, ()=>{
  console.log(`App running on port ${port}`);
}); 