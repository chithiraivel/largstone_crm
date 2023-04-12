const express = require('express');
const courseRoute = express.Router();
const CourseDetails = require('../Modules/CourseDetails')

const course = new CourseDetails();

courseRoute.post('/CourseDetails/:action',(req,res) => {

    course.Check(req,(err,result) => {
        console.log(result);
        if(err){ 
            res.json({'back':false ,'result':err})
        }else{
            res.json({'back':true,'result':result})
        }

    })
})

module.exports=courseRoute;