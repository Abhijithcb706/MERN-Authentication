const express = require("express");
const dotenv = require("dotenv").config()
const jwt = require('jsonwebtoken')
const cookieParser =require('cookie-parser')
const app = express();
const userRoutes = require('./routes/userRoutes')
const {notFound,errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cookieParser())
app.use('/user',userRoutes)

app.get('/',(req,res)=>res.send('server is ready'));


app.use(notFound)
app.use(errorHandler)

connectDB()


app.listen(port,()=>{
    console.log(`server running on ${port}`);
})