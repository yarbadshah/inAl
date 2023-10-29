import mongoose from "mongoose";
import color from 'colors';


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to mongodb database ${conn.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(`error in mongodb ${error}`.bgRed.white)
    }
}

export default connectDB
