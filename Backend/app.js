const express = require('express');
const mongodb = require('mongodb');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

const router = require('./routes/controller');
app.use('/Auth',router)

app.listen('9000',function(req,) {
    console.log("server listening to 9000")
});