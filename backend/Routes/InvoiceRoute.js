const express = require('express');
const invoiceRoute = require('express').Router();
const InvoiceDetails = require('../Modules/InvoiceDetails')

const invoice = new InvoiceDetails();

invoiceRoute.post('/invoice/:action',(req,res) => {

    invoice.Check(req,(err,result) => {
        if(err){
            res.json({back:false ,result:err})
        }else{
            res.json({back:true,result:result})
        }

    })
})

module.exports=invoiceRoute;