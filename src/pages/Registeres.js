import React from 'react'

import Table from '../components/table/Table'

import course from '../assets/JsonData/course.json'
import { Link, useNavigate } from 'react-router-dom'
import { Breadcrumbs, Button, FormControlLabel, IconButton } from '@mui/material'
// import Apps from './breedcrumbs'
import CourseTable from '../components/table/CourseTable'
import RegisterTable from '../components/table/RegisterTable'
import CommonTable from '../components/table/CommonTable'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material'


// const courseTableHead = [
//     '',
//     'Courseid',
//     'Course Name',
//     "Fees",
//     "Subjact",
//     'Duration',
//     'Terms',
//     'Admission_Fess'

// ]

// const renderHead = (item, index) => <th key={index}>{item}</th>

// const renderBody = (item, index) => (
//     <tr key={index}>
//         <td>{item.Courseid}</td>
//         <td>{item.Name}</td>
//         <td>{item.Duration}</td>
//         <td>{item.Terms}</td>
//         <td>{item.Admission_Fess}</td>
//     </tr>
// )



const Registeres = () => {

    const [batchData,setBatchData]=useState('')

    useEffect(()=>{
        axios.post('http://localhost:8000/StudentRegister/view').then((res)=>{
            setBatchData(res.data.result.message.message);
        })
    },[])
    const column = [
        { field: 'id', headerName: 'StudentID', width: 120 ,headerClassName: 'super-app-theme--header',},
        { field: 'StudentName', headerName: 'StudentName', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'Email', headerName: 'Email', width: 200 ,headerClassName: 'super-app-theme--header'},
        { field: 'StudentContactNumber', headerName: 'ContactNumber', width: 160 ,headerClassName: 'super-app-theme--header'},
        { field: 'RegDate', headerName: 'DateofBirth', width: 150,headerClassName: 'super-app-theme--header' },
        { field: 'TENboard', headerName: 'TENboard', width: 130 ,headerClassName: 'super-app-theme--header'},
        { field: 'TENschool', headerName: 'TENschool', width: 140,headerClassName: 'super-app-theme--header' },
        { field: 'TENpassedOut', headerName: 'TENpassedOut', width: 130 ,headerClassName: 'super-app-theme--header'},   
        { field: 'TENpercentage', headerName: 'TENpercentage', width: 140,headerClassName: 'super-app-theme--header' },
        { field: 'TWELFTHboard', headerName: 'TWELFTHboard', width: 80,headerClassName: 'super-app-theme--header' },
        { field: 'TWELFTHschool', headerName: 'TWELFTHschool', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'TWELFTHpercentage', headerName: 'TWELFTHpercentage', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'TWELFTHpassedOut', headerName: 'TWELFTHpassedOut', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'UGpassedOut', headerName: 'UGpassedOut', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'UGpercentage', headerName: 'UGpercentage', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'CollegeName', headerName: 'CollegeName', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'DegreeName', headerName: 'TWELFTHpassedOut', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'GuardianName', headerName: 'GuardianName', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'ParentContactNumber', headerName: 'ParentContactNumber', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'ParentOccupation', headerName: 'ParentOccupation', width: 160,headerClassName: 'super-app-theme--header' },
        { field: 'AdmissionFee', headerName: 'AdmissionFee', width: 160,headerClassName: 'super-app-theme--header' },
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            width: 80,
            renderCell: (params) => (
              <IconButton
                onClick={() => {
                  // handle delete logic here
                }}
              >
                <Delete />
              </IconButton>
            ),
          },
    ]
    
    const MatEdit = ({ index }) => {
  
        const handleEditClick = () => {
            // some action
        }
      
      
        return <FormControlLabel
        
                   control={
                            <div style={{}}>               
                           <button ><VisibilityIcon style={{color:'gray',width:'30px'}}/></button>
                           <button ><EditIcon style={{color:'orange'}}/></button>
                           <button ><DeleteIcon style={{ color:'red' }} /></button>
                           </div>
                   }
               />
      };
const heading="Registration";
const link="/RegistrationTable/RegistrationForm";
const button="Create Register"
    return (
        <div>
          
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <CommonTable
                            limit='4'
                                column={column} id='id' rows={batchData} heading={heading} link={link} button={button}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registeres;
