import * as React from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
    GridToolbarQuickFilter,
    GridLogicOperator,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Pagination } from '@mui/material';
import { useState } from 'react';

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

const VISIBLE_FIELDS = ['BatchID', 'BatchName', 'StartDate', 'EndDate',"Session","StartTime","EndTime","Count","Available","Actions"];

export default function BatchTable(props) {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });

    const [apiData]=useState(props.rows)
   
    const [page,setPage]=useState(1)
    let row =5;
    const count = Math.ceil(apiData.length/row);
    console.log("count" ,count);
    row=row*page
    const list = apiData.slice((page-1)*5 , row);
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
        <Box sx={{ height: 400, width: 1 }}>
            <DataGrid

                sx={{
                    border: "none", ".MuiDataGrid-cell": { border: "none" },
                    "& .MuiDataGrid-columnHeaders": { borderBottom: "none" }, "& .super-app-theme--header": { backgroundColor: "rgb(250,250,251)" }
                }}
                // {...data}
                columns={props?.column}
                rows={list}
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
            />

<div style={{float:'right'}}>
            <Pagination count={count} page={page}  color="primary" onChange={handleChange}/>
            </div>
        </Box>
    );
}


