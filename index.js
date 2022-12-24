const mongoose = require('mongoose')
const express = require('express')
const app = express()

const databaseUrl = 'mongodb://mymongo:27017/dockerDb'

mongoose.connect(databaseUrl)
.then(()=>{
    console.log("Data base connected")
})
.catch(()=>{
    console.log("Error in Connection");
})

app.get('/', (req,res)=> {
res.send({message:"You are visiting ROOT router"})
})

app.listen(3000,()=>{
console.log("Server running at port 3000")    
})