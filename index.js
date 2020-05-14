const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors')

const PORT = process.env.PORT ||  8000;

const app=express();
app.use(bodyParser.json());
app.use(cors());
const db=require('./config/mongoose');
app.set('view engine','ejs');
app.set('views','./view');

app.use('/',require('./routes/index'));



app.listen(PORT,function(err){
    if(err){
        console.log("Error in running the server",err);
    }

    console.log("Server is up and running on port :",PORT);
})