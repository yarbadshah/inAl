import express from "express";
import color  from "colors";
import morgan from "morgan";
const app = express()
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import CategoryRoutes from './routes/categoryRoutes.js'
import productRoutes from "./routes/productRoutes.js";
import path from 'path'

dotenv.config()

connectDB()
app.use(express.json())
app.use(morgan('dev'))

app.use(cors())
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', CategoryRoutes)
app.use("/api/v1/product", productRoutes);

app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*', function(req,res){
    res.sendFile(path.joind(__dirname,'./client/build/index.html'));
})
const PORT=process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server runing at ${PORT}`.bgCyan.white)
})