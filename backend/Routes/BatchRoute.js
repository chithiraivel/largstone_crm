const express = require('express');
const BatchRoute = express.Router();
const BatchDetails = require('../Modules/BatchDetails')

const batch = new BatchDetails()
BatchRoute.post('/BatchDetails/:action',(req,res)=>{

    batch.Check(req,(err,result)=>{
        if(err){
            res.json({'back':false,'result':err})
        }else{
            res.json({'back':true,'result':result})
        }
    })
    

})

module.exports=BatchRoute;