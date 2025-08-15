// initial code 

"use strict" 
console.clear() ;

// main code 

// require all modules 

let express = require("express") ;
let userRoute = express.Router() ;

const { getCreate, postCreate, getAllTodo , getAll} = require("../controller/user.controller");


// creating router 

userRoute.get("/create" , getCreate) ;
userRoute.post("/create" , postCreate) ;

userRoute.get("/all" , getAll) ;
userRoute.get("/all_todo" , getAllTodo) ;


// exports codes 

module.exports = userRoute ;