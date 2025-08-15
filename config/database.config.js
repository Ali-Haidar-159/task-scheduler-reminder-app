// initial code 
"use strict"
console.clear() ;

// main code 

// require all modules 

let mongoose = require("mongoose") ;
require("dotenv").config() ;

let DB_LINK = process.env.DB_LINK ;

async function connectDB()
{
    try
    {
        await mongoose.connect(DB_LINK) ;
        console.log(`Database is connected ✅`) ;
    }
    catch(err)
    {
        console.log(err , "❌")
    }
}

// exports code 

module.exports = connectDB ;