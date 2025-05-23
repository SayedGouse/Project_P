import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MongoDB_URI);
        console.log("DB is connect with", conn.connection.host);
    } catch (error) {
        console.error("Error",error.message)
        process.exit()
        
    }
}


export default connectDB