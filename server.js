// import and set up
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
//const CRUD = require('./DB/CRUD');
const cookie = require('cookie-parser');
//const SQL = require('./DB/DB');
const port = 3000;
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookie());
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'pug');

//routing

app.get('/', (req,res)=>{
    res.redirect('/home');
});

app.get('/home', (req,res)=>{
    res.render('home');
});

app.get('/signup', (req,res)=>{
    res.render('signup');
});

app.get('/login', (req,res)=>{
    res.render('login');
});

app.post('/formSignup', (req,res)=>{
    res.redirect('/login');
});

app.post('/formLogin', (req,res)=>{
    res.redirect('/main');
});

app.get('/main', (req,res)=>{
    res.render('main');
});

app.get('/logOut', (req,res)=>{
    res.clearCookie('email');
    res.clearCookie('userName');
    res.clearCookie('placeID');
    res.redirect('home');
});

app.get('/requests', (req,res)=>{
    res.render('request');
});

app.get('/reports', (req,res)=>{
    res.render('reports');
});

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});