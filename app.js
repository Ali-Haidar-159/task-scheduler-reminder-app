// initial code 

"use strict"
console.clear() ;

// main code 

// require all modules 

let express = require("express") ;
let app = express() ;

let path = require("path") ;

let morgan = require("morgan") ;
let cors = require("cors") ;
let ejs = require("ejs") ;
const userRoute = require("./router/user.router");
const startEmailReminder = require("./config/sendingEmail");

// set with server 

app.use(express.urlencoded({extended : true})) ;
app.use(express.json()) ;
app.use(express.static(path.join(__dirname , "public"))) ;

app.use(morgan("dev")) ;
app.use(cors()) ;

app.use(userRoute) ;

app.set("view engine" , "ejs") ;
app.set("views" , path.join(__dirname , "view")) ;


// request-response-cycle handle 

app.get("/" , function(req,res){

    res.status(200).render("home")
}) ;

// handle the route error 

app.use(function(req,res,next){
    res.status(404).json({
        status : 404 ,
        message : "Page Not Found !!!"
    });
}) ;

// handle the server error 

app.use(function(err,req,res,next){

    res.status(500).json({
        status : 500 ,
        message : "Server Error !!!"
    });

});

startEmailReminder();

// exports code 

module.exports = app ;
