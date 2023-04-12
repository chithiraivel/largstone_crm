import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Typography, Box, Button, InputAdornment, MenuItem, Autocomplete } from "@mui/material";
import { styled } from "@mui/system";
import Invoice from '../assets/JsonData/invoiceform.json'
import { Link } from "react-router-dom";
import AppBreadcrumbs from "./BreadCrumps";
import moment from "moment";
import { useEffect } from "react";
import axios from "axios";
// import Apps from "../../pages/breedcrumbs";
  


export default function Invoiceform() {

    const [Register, RegisterChange] = useState({});
    console.log(Register);
    const [Batchlist,setBatchlist]=useState([])
    const [entrolled,setEntrolled]=useState('')
    console.log(Batchlist);
    console.log(entrolled);
    const [BatchStartingDate, setBatchStartingDate] = useState((moment(new Date()).format('YYYY-MM-DD')));

    Register.StudentName=entrolled.StudentName
    Register.CourseName=entrolled.CourseName
    Register.BatchName=entrolled.BatchName
    Register.AdmissionFee=entrolled.AdmissionFee
    Register.InvoiceDate=BatchStartingDate
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const OnSubmit = (data) => {
        console.log('hii');
        axios.post("http://localhost:8000/invoice/create",Register)
    }
    
    useEffect(()=>{
        axios.post("http://localhost:8000/StudentRegister/view").then((res)=>setBatchlist(res.data.result.message.message))
    },[])

    const handlesubmit = (e) => {
        e.preventDefault();

    }
    const StyledTextField = styled(TextField, {
        name: "StyledTextField",
    })({
        width: 300,
        height: 40

    });
    const form = (
        <form onSubmit={handleSubmit(OnSubmit)} style={{ marginTop: '20px' }}>

            
            <Grid container spacing={3} sx={{ p: 2 }}>

            <Grid item xs={10} md={4}>
                    
                    <Autocomplete
                    onChange={(e,newValue)=> setEntrolled(newValue)}
                      options={Batchlist}
                      getOptionLabel={(option) => option.StudentName}

                    id="combo-box-demo"

                    size='small'
                     renderInput={(params) => <TextField multiline fullWidth size="small" {...params} label="Name" />}
                    >     
                        </Autocomplete>
                   </Grid>

                   <Grid item xs={10} md={4}>
                            <TextField name='CourseName' InputLabelProps={{shrink:true}} value={entrolled?.CourseName || ""} multiline  fullWidth onChange={(e)=>Register.Course=e.target.value} size='small' label="Course Name" />
                        </Grid>
                        <Grid item xs={10} md={4}>
                            <TextField name='Batch' InputLabelProps={{shrink:true}} value={entrolled?.BatchName || ""} multiline  fullWidth onChange={(e)=>Register.Batch=e.target.value} size='small' label="Batch" />
                        </Grid>
                        <Grid item xs={10} md={4}>
                            <TextField name='Amount' InputLabelProps={{shrink:true}} value={entrolled?.AdmissionFee || ""} multiline  fullWidth onChange={(e)=>Register.Amount=e.target.value} size='small' label="Amount" />
                        </Grid>
                {Invoice.map((R) => {

                    return (
                        <Grid item sm={6} md={4} xs={12} >
                            <TextField

                                id="standard-textarea"
                                label={R.label}
                                multiline
                                select={R.select}
                                variant="outlined"
                                name={R.name}

                                error={Boolean(errors[`${R.error}`])} helperText={errors[`${R.error}`]?.message}

                                {...register(`${R.name}`, { required: `${R.required}`, pattern: { value: (`${R.pattern}`), message: `${R.message}` }, maxLength: { value: 10, message: `${R.message}` } })}
                                fullWidth size="small" placeholder={R.placeholder} onChange={(e) => (Register[`${R.name}`] = e.target.value)}

                            >
                                {R?.options?.map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Grid>
                    )
                })}

<Grid item xs={10} md={3.5}>
                        <TextField name='InvoiceDate' multiline type='date' value={BatchStartingDate} onChange={(e)=>setBatchStartingDate(e.target.value)} fullWidth label="InvoiceDate" size="small" />
                    </Grid>
            </Grid>

            <Button variant="contained" color="primary" type='submit' disableRipple disableElevation sx={{  width: "100px", my: 4, mx: 2 }}>Add</Button>
            <Link to='/InvoiceTable'>
                <Button variant="contained" color="secondary" type='submit' disableRipple disableElevation sx={{  width: "100px",mx:4 }}>Back</Button>
            </Link>

        </form>

    )

    return (
        <Box className="card">
            {form}
        </Box>


    )
}