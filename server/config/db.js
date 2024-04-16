const mongoose = require('mongoose')
const dotenv =require('dotenv')

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://abhijith:Abhijith2001@cluster0.ypyxvlu.mongodb.net/MernAuth')
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
        
    }
}

module.exports=connectDB;