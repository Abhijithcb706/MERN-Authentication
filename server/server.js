const express = require("express");
const dotenv = require("dotenv").config()
const app = express();
const userRoutes = require('./routes/userRoutes')
const {notFound,errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;


app.use('/user',userRoutes)

app.get('/',(req,res)=>res.send('server is ready'));


app.use(notFound)
app.use(errorHandler)

connectDB()


app.listen(port,()=>{
    console.log(`server running on ${port}`);
})