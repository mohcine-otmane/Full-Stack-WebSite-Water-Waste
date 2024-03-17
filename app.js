const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var mysql = require('mysql');
const dotenv = require('dotenv');

const app = express();

// DataBase

const encoder = bodyParser.urlencoded();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    // database: "digitalmedia"
    database: "mydb"
});


connection.connect(function(error){
    if(error) throw error;
    else console.log("Connected to the database");
});




app.post("/", encoder,function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("select * from loginuser where username = ? and password =?",[username,password] , function(error,results,fields){
        if(results.length  >0){
            res.render('profile');
        }else{
            res.render('login');
        }
        res.end();
    })
});

// app.get("/profile", function(req,res){
//     res.render('profile');
// });
// End DataBase



const morgan = require('morgan');
app.set('view engine', 'ejs');
app.listen(3000);
app.use(express.static('public'))
app.use(morgan('dev'));
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.get('/waste', (req, res) => {
	res.render('waste');
});

app.get('/save', (req, res) => {
	res.render('save');
});

// Database
