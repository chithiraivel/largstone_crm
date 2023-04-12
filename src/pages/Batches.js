import React from 'react'

import Table from '../components/table/Table'
import { Delete } from '@mui/icons-material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import course from '../assets/JsonData/course.json'
import { Link, useNavigate } from 'react-router-dom'
import { Breadcrumbs, Button } from '@mui/material'
// import Apps from './breedcrumbs'
import CourseTable from '../components/table/CourseTable'
import BatchTable from '../components/table/BatchTable'
import CommonTable from '../components/table/CommonTable'
import AppBreadcrumbs from './BreadCrumps'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const Batches = () => {

    const [batchData,setBatchData]=useState('')

    useEffect(()=>{
        axios.post('http://localhost:8000/BatchDetails/view').then((res)=>{
            setBatchData(res.data.result.message.message);
        })
    },[])

    const view =(id)=>{
        localStorage.setItem('tua',true)
        console.log(id);
    }
    const edit =(id)=>{
        console.log(id);
        
    }
    const deletedata =(id)=>{
        console.log(id)
        axios.post('http://localhost:8000/BatchDetails/delete',{id})

    }

    const column = [
        { field: 'id', headerName: 'BatchID', width: 120 ,headerClassName: 'super-app-theme--header',},
        { field: 'BatchName', headerName: 'BatchName', width: 130,headerClassName: 'super-app-theme--header' },
        { field: 'StartDate', headerName: 'StartDate', width: 130 ,headerClassName: 'super-app-theme--header'},
        { field: 'EndDate', headerName: 'EndDate', width: 130 ,headerClassName: 'super-app-theme--header'},
        { field: 'Session', headerName: 'Session', width: 140,headerClassName: 'super-app-theme--header' },
        { field: 'StartTime', headerName: 'StartDate', width: 140,headerClassName: 'super-app-theme--header' },
        { field: 'EndTime', headerName: 'EndDate', width: 130 ,headerClassName: 'super-app-theme--header'},
        { field: 'Count', headerName: 'Count', width: 130,headerClassName: 'super-app-theme--header' },{
            field: 'Actions',
            headerName: 'Actions',
            sortable: false,
            width: 200,
            renderCell: (params) => {
              
                return (
               <>
              
               <Link to={`/BatchTable/BatchForm/view/${params.row.id}`}> <div style={{width:'35px',color:'gray'}} onClick={()=>view(params.row.id)}><VisibilityIcon /></div></Link>
                <Link to={`/BatchTable/BatchForm/edit/${params.row.id}`}><div style={{width:'35px',color:'orange'}} onClick={()=>edit(params.row.id)}><EditIcon/></div></Link>
                <div style={{width:'35px',color:'red'}} onClick={()=>deletedata(params.row.id)}><Delete /></div>
                </>
                )
                },
          },
        ]
    const rows = [{ id: 1, BatchID: "A10", BatchName: "Testing", StartDate: "500000", EndDate: "Selinium,Java", Session: "6months", StartTime: "3", EndTime: "10000",Count:"45",Available:"23" },
    { id: 2, BatchID: "A10", BatchName: "Testing", StartDate: "500000", EndDate: "Selinium,Java", Session: "6months", StartTime: "3", EndTime: "10000",Count:"45",Available:"23" },{ id: 3, BatchID: "A10", BatchName: "Testing", StartDate: "500000", EndDate: "Selinium,Java", Session: "6months", StartTime: "3", EndTime: "10000",Count:"45",Available:"23" },{ id: 4, BatchID: "A10", BatchName: "Testing", StartDate: "500000", EndDate: "Selinium,Java", Session: "6months", StartTime: "3", EndTime: "10000",Count:"45",Available:"23" },{ id: 5, BatchID: "A10", BatchName: "Testing", StartDate: "500000", EndDate: "Selinium,Java", Session: "6months", StartTime: "3", EndTime: "10000",Count:"45",Available:"23" },
    ]

   const heading="Batches";
   const button="Create Batch";
   const link='/BatchTable/BatchForm/:action/:id';

    return (
        <div>
            
            
                <div className="col-12" >
                    <div className="card">
                        <div className="card__body">
                        <div className="row">
               
                            <CommonTable
                            
                                column={column} rows={batchData} id='id' heading={heading} link={link} button={button}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Batches;
