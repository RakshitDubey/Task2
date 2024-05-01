const mongoose=require('mongoose')


const connectDb=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/assignment")
        console.log("Connected");
        
    } catch (error) {
        console.log("Error");
        
    }

}

module.exports=connectDb