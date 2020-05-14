const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ivkgamer:2541890@cluster0-bpy4l.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology:true},);
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error in Connecting to mongoDB"));
db.once('open',function(){
    console.log("Connected to Database::MongoDB");

});
module.exports=db;