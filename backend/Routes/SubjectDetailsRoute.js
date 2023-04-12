const express = require('express');
const SubjectDetailsRoute = express.Router();
const SubjectDetails = require('../Modules/SubjectDetails')

const subject = new SubjectDetails()
SubjectDetailsRoute.post('/SubjectDetails/:action',(req,res)=>{

    subject.Check(req,(err,result)=>{
        if(err){
            res.json({'back':false,'result':err})
        }else{
            res.json({'back':true,'result':result})
        }
    })
    

})

module.exports=SubjectDetailsRoute;