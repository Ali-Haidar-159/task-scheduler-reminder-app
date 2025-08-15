// initial code 
"use strict"
console.clear() ;

// main code 

// require all modules 

let mongoose = require("mongoose") ;

let todoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name should be required !"]
    },
    description: {
        type: String,
        required: [true, "Description should be required !"]
    },
    time: {
        type: String,
        required: [true, "Time should be required !"]
    },
    date: {
        type: String,
        required: [true, "Date should be required !"]
    }


});


let todoCollection = mongoose.model("todos" , todoSchema) ;


// exports code 

module.exports = todoCollection ;

