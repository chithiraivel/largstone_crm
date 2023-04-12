const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
const app = express();
const db = require('../backend/server/db')
const {studentsRoute,courseRoute,BatchRoute,SubjectDetailsRoute,InvoiceRoute} = require('../backend/Routes/CommonRoutes')
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json())
let emoji = require('node-emoji')
var colors = require('colors/safe');
app.use('/' , studentsRoute,courseRoute,BatchRoute,SubjectDetailsRoute,InvoiceRoute)

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log( colors.red.underline(`******* ${emoji.get("skull_and_crossbones")} ${emoji.get("smiley")} Database connected ${emoji.get("skull_and_crossbones")} ${emoji.get("smiley")} ******** `));
    }
})

app.listen(port,() => {
    console.log( colors.rainbow(`Server is Listening ${emoji.get("bullettrain_front")} ${port}  ${emoji.get("bullettrain_front")}`));
})