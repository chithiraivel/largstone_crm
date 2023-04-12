const express = require('express');
const studentsRoute = require('express').Router();
const StudentDetails = require('../Modules/StudentDetails')

const student = new StudentDetails();

studentsRoute.post('/StudentRegister/:action',(req,res) => {

    student.Check(req,(err,result) => {
        if(err){
            res.json({back:false ,result:err})
        }else{
            res.json({back:true,result:result})
        }

    })
})

module.exports=studentsRoute;