// initial code 
"use strict"
console.clear() ;

// main code 

// require all modules 

let app = require("./app") ;

require("dotenv").config() ;
let chalk = require("chalk") ;
const connectDB = require("./config/database.config");

let design = chalk.bgRed.white.bold ;

let portNumber = process.env.PORT || 5000 ;

app.listen(portNumber , async function(){

    console.log(design(`Server is running at http://localhost:${portNumber} ...`)) ;

    await connectDB() ;

})