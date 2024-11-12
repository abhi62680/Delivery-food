import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoutes.js"




//app config

const app = express()
const port = 4000

//middleware 
app.use(express.json())
app.use(cors())


// db connection 

connectDB();


//api endpoints
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API working")

})


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)

})

//mongodb+srv://abhi62680:Abhi62680@cluster0.dieq7.mongodb.net/?