import * as React from "react";
import Paper from "@mui/material/Paper";

import { Box, Button, FormControlLabel, TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link, useLocation, useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid,GridToolbar,  GridToolbarQuickFilter,GridLogicOperator, } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import bread from '../pages/BreadCrumps'
import AppBreadcrumbs from "../pages/BreadCrumps";
const VISIBLE_FIELDS = ['BatchID', 'BatchName', 'StartDate', 'EndDate',"Session","StartTime","EndTime","Count","Available","Actions"];
export default function BatchTable(prop) {
  // const navi=useNavigate()
 
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 10,
  });
 //reference headername colums any apply this field
  const colum = [
    { field: 'BatchID', headerName: 'BatchID', width: 120 ,headerClassName: 'super-app-theme--header',},
    { field: 'BatchName', headerName: 'BatchName', width: 130,headerClassName: 'super-app-theme--header' },
    { field: 'StartDate', headerName: 'StartDate', width: 130 ,headerClassName: 'super-app-theme--header'},
    { field: 'EndDate', headerName: 'EndDate', width: 130 ,headerClassName: 'super-app-theme--header'},
    { field: 'Session', headerName: 'Session', width: 140,headerClassName: 'super-app-theme--header' },
    { field: 'StartTime', headerName: 'StartDate', width: 140,headerClassName: 'super-app-theme--header' },
    { field: 'EndTime', headerName: 'EndDate', width: 130 ,headerClassName: 'super-app-theme--header'},
    { field: 'Count', headerName: 'Count', width: 130,headerClassName: 'super-app-theme--header' },
    { field: 'Available', headerName: 'Available', width: 130,headerClassName: 'super-app-theme--header' },
    // {
    //   field: "Actions",
    //   headerName: "Actions",
    //   width: 170,
    //   renderCell: (params) => {
    //       return (
    //           <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
    //               <MatEdit index={params.row.id} />
    //            </div>
    //       );
    //    }
    // }
  ]
    
  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () => colum.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [colum],
  );

  function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
        />
      </Box>
    );
  }
 
  const add=()=>{
   
  }
  const MatEdit = ({ index }) => {
  
    const handleEditClick = () => {
        // some action
    }
  
  
    return <FormControlLabel
    
               control={
                        <div style={{margin:'10px 10px',padding:'10px 10px'}}>               
                       <button ><VisibilityIcon style={{color:'gray',width:'30px'}}/></button>
                       <button ><EditIcon style={{color:'orange'}}/></button>
                       <button ><DeleteIcon style={{ color:'red' }} /></button>
                       </div>
               }
           />
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "10px",boxShadow:'none' }}>

         <AppBreadcrumbs />

      <div
        style={{ float: "right", margin: "10px 60px", padding: "10px 10px" }}
      >
        {" "}

  <Link to='/BatchTable/BatchForm'>
        <Button variant="contained" sx={{ marginLeft: "20px",backgroundColor:'#62b4ff' }} onClick={add}>
        Create Batchs
        </Button>
        </Link>  
      </div>

<Box sx={{ height: 400, width:925,marginLeft:'10px',marginTop:'80px','& .super-app-theme--header': {
          backgroundColor: 'white',fontSize:'18px',fontWeight:'bold'
        }, }} className="page-header">
      <DataGrid sx={{fontFamily:'sans-serif,Teko'}}
        {...data}
        rows={data}
        columns={columns}
        initialState={{
          ...data.initialState,
          filter: {
            ...data.initialState?.filter,
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLogicOperator.Or,
            },
          },
        }}
        slots={{ toolbar: QuickSearchToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
    </Paper>
  );
}
