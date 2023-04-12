import React from 'react'

import Table from '../components/table/Table'

import course from '../assets/JsonData/course.json'

import { Breadcrumbs, Button, IconButton } from '@mui/material'
// import Apps from './breedcrumbs'
import CourseTable from '../components/table/CourseTable'
import CommonTable from '../components/table/CommonTable'
import AppBreadcrumbs from './BreadCrumps'

import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Delete } from '@mui/icons-material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'

// const courseTableHead = [
//     '',
//     'Courseid',
//     'Course Name',
//     "Fees",
//     "Subjact",
//     'Duration',
//     'Terms',
//     'AdmissionFees'

// ]

// const renderHead = (item, index) => <th key={index}>{item}</th>

// const renderBody = (item, index) => (
//     <tr key={index}>
//         <td>{item.Courseid}</td>
//         <td>{item.Name}</td>
//         <td>{item.Duration}</td>
//         <td>{item.Terms}</td>
//         <td>{item.AdmissionFees}</td>
//     </tr>
// )



const Courses = () => {
   
    const [courseData,setCourseData]=useState('')

    useEffect(()=>{
        axios.post('http://localhost:8000/CourseDetails/view').then((res)=>{
            setCourseData(res.data.result.message.message);
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
        axios.post('http://localhost:8000/CourseDetails/delete',{id})

    }

    
    const column = [{ field: "id", headerName: "Courseid", width: 130, headerClassName: "super-app-theme--header" }, { field: "CourseName", headerName: "CourseName", width: 150, headerClassName: "super-app-theme--header" }, { field: "Fees", headerName: "Fees", width: 110, headerClassName: "super-app-theme--header" }, { field: "Subject", headerName: "Subject", width: 180, headerClassName: "super-app-theme--header" }, { field: "Duration", headerName: "Duration", width: 130, headerClassName: "super-app-theme--header" },
    { field: "Description", headerName: "Description", width: 200, headerClassName: "super-app-theme--header" },
    { field: "Status", headerName: "Status", width: 150, headerClassName: "super-app-theme--header" },
    {
        field: 'Actions',
        headerName: 'Actions',
        sortable: false,
        width: 200,
        renderCell: (params) => {
          
            return (
           <>
          
           <Link to={`/CourseTable/CourseForm/view/${params.row.id}`}> <div style={{width:'35px',color:'gray'}} onClick={()=>view(params.row.id)}><VisibilityIcon /></div></Link>
            <Link to={`/CourseTable/CourseForm/edit/${params.row.id}`}><div style={{width:'35px',color:'orange'}} onClick={()=>edit(params.row.id)}><EditIcon/></div></Link>
            <div style={{width:'35px',color:'red'}} onClick={()=>deletedata(params.row.id)}><Delete /></div>
            </>
            )
            },
      },]
    const rows = [{ id: 1, Courseid: "A10", CourseName: "Testing", Fees: "500000", Subject: "Selinium,Java", Duration: "6months", Terms: "3", AdmissionFees: "10000" },
    { id: 2, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 3, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 4, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 5, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 6, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" },{ id: 7, Courseid: "A10", CourseName: "Testing", Fees: "500000", Subject: "Selinium,Java", Duration: "6months", Terms: "3", AdmissionFees: "10000" },
    { id: 8, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 9, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 10, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 11, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }, { id: 12, Courseid: "A11", CourseName: "Front-End Developement", Fees: "700000", Subject: "HTML,CSS,JS,React", Duration: "6months", Terms: "3", AdmissionFees: "10000" }]

 const heading="Courses";
 const link="/CourseTable/CourseForm/:action/:id";
 const button="Create Coures"

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                
           
                            <CommonTable
                                column={column} rows={courseData} id='id' heading={heading} link={link} button={button}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
