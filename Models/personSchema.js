const mongoose = require("mongoose")
const personSchema = mongoose.Schema({
    name : String,
    age : Number,
    favoriteFood :[String]
})

const Person = mongoose.model("user", personSchema)
module.exports= Person
