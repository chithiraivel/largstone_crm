import * as React from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
    GridToolbarQuickFilter,
    GridLogicOperator,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Button, Pagination } from '@mui/material';
import { useState } from 'react';
import './table.css'
import { Link } from 'react-router-dom';

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

// const VISIBLE_FIELDS = ['Courseid', 'Course_Name', "Fees", "Subject", 'Duration', 'Terms', 'Admission_Fess']

export default function CommonTable(props) {
    console.log(props);
    const { data } = useDemoData({
        dataSet: 'Employee',
        // visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });


    const [apiData]=useState(props.rows)
   
    const [page,setPage]=useState(1)
    let row =5;
    const count = Math.ceil(props.rows.length/row);
    console.log("count" ,count);
    row=row*page
    const list = props.rows.slice((page-1)*5 , row);
    console.log(list);
   const handleChange = (event ,value) => {
    setPage(value);
   
   }

    // Otherwise filter will be applied on fields such as the hidden column id
    // const columns = React.useMemo(
    //     () => column.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    //     [column],
    // );

    return (
        <Box sx={{ width: 1, pb:7}}>
             <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                <h2 className="page-header">
                    {props.heading}
                </h2>
                </div>
                <div>
                <Link to={props.link}>
                    <Button variant="contained" type='submit' disableRipple disableElevation sx={{ backgroundColor: "#62b4ff", width: "170px", ":hover": { backgroundColor: "#62b4ff" } }}>{props.button}</Button>

                </Link>
                </div>
            </div>
            <DataGrid

                sx={{
                    border: "none", ".MuiDataGrid-cell": { border: "none" },
                    "& .MuiDataGrid-columnHeaders": { borderBottom: "none" },
                    "& .super-app-theme--header": { backgroundColor: "rgb(250,250,251)" },
                    ".&  .MuiDataGrid-iconButtonContainer css-ltf0zy-MuiDataGrid-iconButtonContainer ": { visibility: "hidden" },'.MuiDataGrid-columnSeparator': {
                        display: 'none',
                      },
                      '&.MuiDataGrid-root': {
                        border: 'none',
                      }, '.MuiDataGrid-iconButtonContainer': {
        visibility: 'hidden',
      },
      '.MuiDataGrid-sortIcon': {
        opacity: 0,
        visibility: 'hidden',
      },'& .MuiDataGrid-row':{":hover":{backgroundColor:'#62b4ff',color:'white'}},fontSize:'16px'
                }}
                // {...data}
                columns={props?.column}
                rows={list}
                getRowId={row=>row[props?.id]}
                disableColumnFilter
                disableColumnMenu
                disableColumnSelector
                disableDensitySelector
                disableVirtualization
                autoHeight
                hideFooterPagination
                disableRowSelectionOnClick
                initialState={{
                    ...list.initialState,
                    filter: {
                        ...list.initialState?.filter,
                        filterModel: {
                            items: [],
                            quickFilterLogicOperator: GridLogicOperator.Or,
                        },
                    },
                }}
                slots={{ toolbar: QuickSearchToolbar }}
            />

            <div style={{float:'right',position:'relative',bottom:'35px'}}>
            <Pagination className="pagi" count={count} page={page}  onChange={handleChange} sx={{'& .MuiSvgIcon-root': { display: 'none' }, '& .MuiButtonBase-root':{":hover":{backgroundColor:'#349eff',color:'white'}},'& .MuiButtonBase-root.Mui-selected':{backgroundColor:'#62b4ff',}
        }}/>
            </div>
        </Box>
    );
}


