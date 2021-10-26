///////////////////////////////////
// import dependencies
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection")

///////////////////////////////////////////
// Create our Fruits Model
///////////////////////////////////////////
// destructuring Schema and model from mongoose
const {Schema, model} = mongoose 
//Doing the same thing as following:
// const Schema  mongoose.Schema
// const model = mongoose.model

// make a fruits schema
const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String
})
// Make the Fruit Model
const Fruit = model("Fruit", fruitSchema)

// log the model to make sure it exists
// console.log(Fruit)

///////////////////////////////////////
//export the fruit model
///////////////////////////////////////
module.exports = Fruit