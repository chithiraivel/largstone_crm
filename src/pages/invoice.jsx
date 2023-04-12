import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CommonTable from '../components/table/CommonTable'

import { Link, useNavigate } from 'react-router-dom'
import { Breadcrumbs, Button } from '@mui/material'

import axios from 'axios'
// import Apps from './breedcrumbs'



const Invoice = () => {
    const [bachlist,setBatchlist]=useState([])
    useEffect(()=>{
        axios.post("http://localhost:8000/invoice/view").then((res)=>setBatchlist(res.data.result.message.message))
    },[])
    

    const column = [{ field: "invoiceid", headerName: "invoiceid", width: 130, headerClassName: "super-app-theme--header" },
    
    { field: "StudentName", headerName: "StudentName", width: 130, headerClassName: "super-app-theme--header" },
    { field: "CourseName", headerName: "CourseName", width: 130, headerClassName: "super-app-theme--header" },
    { field: "BatchName", headerName: "BatchName", width: 130, headerClassName: "super-app-theme--header" },
    { field: "AdmissionFee", headerName: "AdmissionFee", width: 130, headerClassName: "super-app-theme--header" },
    { field: "Discount", headerName: "Discount", width: 130, headerClassName: "super-app-theme--header" },
    { field: "Term", headerName: "Term", width: 130, headerClassName: "super-app-theme--header" },
    { field: "TotalAmount", headerName: "TotalAmount", width: 130, headerClassName: "super-app-theme--header" },
    { field: "paymentMethod", headerName: "PaymentMethod", width: 130, headerClassName: "super-app-theme--header" },
    { field: "InvoiceDate", headerName: "InvoiceDate", width: 130, headerClassName: "super-app-theme--header" }
]
    const rows = [{ id: 1, Invoiceid: "A10", Studentid: "Testing", Name: "500000", InvoiceDate: "Selinium,Java", Course: "6months", Batch: "3", PendingAmount: "10000", PendingTerm: "1", Term: "3", Amount: "20000", Discount: "0%", TotalAmount: "50000", PaymentMethod: "cash" },
    { id: 2, Invoiceid: "A11", Studentid: "Front-End Developement", Name: "700000", InvoiceDate: "HTML,CSS,JS,React", Course: "6months", Batch: "3", PendingAmount: "10000", PendingTerm: "1", Term: "3", Amount: "20000", Discount: "0%", TotalAmount: "50000", PaymentMethod: "cash" }]


  const heading="Invoice";
  const link="/InvoiceTable/Invoiceform";
  const button="Create Invoice"
    return (
        <div>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <CommonTable
                                column={column} id='invoiceid' rows={bachlist} heading={heading} link={link} button={button}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice;
