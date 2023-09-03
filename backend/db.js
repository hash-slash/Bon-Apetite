const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://ashesh2001:India.007@bonapetite.jxgdijd.mongodb.net/BonApetiteDB?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false) 
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    const fetched_data = await mongoose.connection.db.collection("fooditems");
        fetched_data.find({}).toArray(function(err,data){
            if(err)console.log(err);
            else console.log(data);
        })
    }
module.exports = mongoDB;

