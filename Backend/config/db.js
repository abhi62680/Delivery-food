import mongoose from "mongoose";

 export const connectDB =async () => {
    await mongoose.connect('mongodb+srv://abhi62680:Abhi62680@cluster0.dieq7.mongodb.net/fooddelivery').then(()=>console.log("DB connected"));
}