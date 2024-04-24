const mongoose=require('mongoose');

const mongoURI="mongodb://localhost:27017/iNotebook?directConnection=true";

const connectToMongo= ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected to mongo");
    }).catch((e)=>console.log("error occured!"));
}

module.exports= connectToMongo;