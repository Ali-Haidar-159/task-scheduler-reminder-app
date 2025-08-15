// initial code 
"use strict"
console.clear() ;

// main code 

const todoCollection = require("../model/user.model");

let getCreate = function(req,res){

    res.status(200).render("createTodo") ;

}

let postCreate = async function(req,res){

    let {todoName , todoDescription , todoTime , todoDate} = req.body ;

    // let newTodo = {
    //     id : new Date().getTime().toString() ,
    //     todoName ,
    //     todoDescription , 
    //     todoTime , 
    //     todoDate
    // }

    let newTodo = new todoCollection({
        name : todoName ,
        description : todoDescription ,
        time : todoTime ,
        date : todoDate 
    }) ;

    await newTodo.save() ;

    // res.status(201).json({

    //     status : 201 ,
    //     message : "To Do Is Created !" ,
    //     data : newTodo 
    // });

    res.status(201).redirect("/") ;

}

let getAllTodo = async function(req,res){
    
    let allTodo = await todoCollection.find().sort({time : 1}) ;

    res.status(200).json({

        status : 200 ,
        data : allTodo 

    }) ;

}

let getAll = function(req,res){

    res.status(200).render("allTodo") ;

}


// exports codes 

module.exports = {

    getCreate ,
    postCreate ,

    getAll ,
    getAllTodo ,

}
