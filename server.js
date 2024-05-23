const express =require ("express")
const app = express()
const mongoose = require ("mongoose")


const dotenv=require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Database is connected"))
.catch((err)=> console.log("error",err))

app.use("/api", require("./routes/personRoutes"))



const PORT = process.env.PORT
app.listen(PORT , ()=> console.log("My server is running on port", PORT))