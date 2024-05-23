const Person = require ("../Models/personSchema")

// find
const getPerson = async(req,res) =>{
    try{
        const newPerson = await Person.find()
        res.status(200).json({msg:"find all data", newPerson:newPerson})
    }
    catch(err){
        res.status(500).json({msg: err.msg})
    }

}
// create
const createPerson = async(req,res) =>{
    try{
        const newPerson = await Person.create(req,body)
       await newPerson.save()
        res.status(201).json({msg:"person created", newPerson})
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }

}

//delete
const deletePerson = async(req,res) =>{
    try{
        const newPerson = await Person.findByIdAndDelete(req.params.id)
        if(!newPerson) return res.status(404).json({msg:"not found"})
        res.status(200).json({msg:"contact deleted", newPerson})
    }
    catch(err){
        res.status(500).json({msg: err.msg})
    }

}

// update
const updatePerson = async(req,res) =>{
    try{
        const newPerson = await Person.findByIdAndUpdate({_id:req.params.id},{...req.body})
        if(!newPerson) return res.status(404).json({msg:"not found"})
        res.status(200).json({msg:"contact updated", newPerson:{...newPerson._doc,...req.body}})
    }
    catch(err){
        res.status(500).json({msg: err.msg})
    }}












module.exports ={ createPerson, getPerson,updatePerson,deletePerson}