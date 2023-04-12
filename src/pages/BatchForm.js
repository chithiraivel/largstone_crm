import React, { useState } from "react";
import batchs from '../assets/JsonData/batchs.json'
import {
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AppBreadcrumbs from "./BreadCrumps";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import { Api_url } from "../host";
export default function BatchsForm() {
  const params = useParams();

  const [BatchDetails, setBatchDetails] = useState({});
  const [Status,setStatus]=useState(true)
  const [Subjects,setSubjects]=useState([])
  const [edit,setEdit]=useState('')
  const [tua,setTua]=useState(false)
console.log(edit);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const OnSubmit = (data) => {

    if(params.action == 'edit'){
      console.log('pass');
      BatchDetails.id=params.id
      axios.post("http://localhost:8000/BatchDetails/update",BatchDetails);
  
    }else{
    axios.post('http://localhost:8000/BatchDetails/create',BatchDetails);
    }
  }
  const [view1,setview]=useState([])
  const [bat,setBat]=useState('')
  const [count,setCount]=useState('')
  const [session,setSession]=useState('')
  const [endDate,setEndDate]=useState('')
  const [startDate,setStartDate]=useState('')
  const [startTime,setStartTime]=useState('')
  const [endTime,setEndTime]=useState('')


  console.log(session)
  useEffect(() => {
   

    if(params.action == 'edit'){
    axios.post(`${Api_url}/BatchDetails/viewselect`,{id:params.id}).then((res) =>{
      setEdit(res.data.result.message.message[0]);
      setBat(res.data.result.message.message[0].BatchName)
      setCount(res.data.result.message.message[0].Count)
      setSession(res.data.result.message.message[0].Session)
      setEndDate(res.data.result.message.message[0].EndDate)
      setStartDate(res.data.result.message.message[0].startDate)
      setEndTime(res.data.result.message.message[0].StartTime)
      setStartTime(res.data.result.message.message[0].EndTime)




      console.log('edit');
    });
    }else if(params.action == 'view'){
      setTua(localStorage.getItem('tua'))
      axios.post("http://localhost:8000/BatchDetails/viewselect",{id:params.id}).then((res) =>{
        setEdit(res.data.result.message.message[0]);
     
    });
    }
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const StyledTextField = styled(TextField, {
    name: "StyledTextField",
  })({
    width: 300,
    height: 40,
  });
  const form = (
    <form onSubmit={handleSubmit(OnSubmit)} style={{ marginTop: "0px" }}>
         <Typography
        variant="h4"
        sx={{
          color: "#53687c",
          backgroundColor: "",
          borderRadius: "15px",
          textAlign: "center",
          fontWeight: "600",
          fontFamily: "cursive",
        }}
      >
        {/* Batch Form */}
      </Typography>
       
     

      <Grid container spacing={3} sx={{ p: 2 }}>
        

 <Grid item sm={6} md={4} xs={12}>
          <TextField
        id="date"
        label="Enter BatchName"
        size="small"
        name="BatchName"
        value={bat}
       multiline
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        error={Boolean(errors?.BatchName)}
        helperText={errors.BatchName?.message}
        {...register('BatchName',{
          required:'Enter BatchName'
        })}
        onChange={(e) => setBat(e.target.value)}
      />
      </Grid>

      <Grid item sm={6} md={4} xs={12}>
          <TextField
        id="date"
        label="Enter Count"
        size="small"
        name="Count"
        value={count}
       multiline
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        error={Boolean(errors?.Count)}
        helperText={errors.Count?.message}
        {...register('Count',{
          required:'Enter Count'
        })}
        onChange={(e) => setCount(e.target.value)}
      />
      </Grid>
      <Grid item sm={6} md={4} xs={12}>
          <TextField
        id="date"
        label="Enter Session"
        size="small"
        name="Session"
        value={session}
        select
       multiline
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        error={Boolean(errors?.Session)}
        helperText={errors.Session?.message}
        {...register('Session',{
          required:'Enter Session'
        })}
        onChange={(e) => setSession(e.target.value)}
      >
        <MenuItem value="Morning">Morning</MenuItem>
      </TextField>
      </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <TextField
        id="date"
        label="Enter Start Date"
        type="date"
        size="small"
        name="StartDate"
        // defaultValue={edit.StartDate}
        value={moment(startDate).utc().format('YYYY-MM-DD')}
       
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        error={Boolean(errors?.StartDate)}
        helperText={errors.StartDate?.message}
        {...register('StartDate',{
          required:'Enter Start Date'
        })}
        onChange={(e) =>setStartDate(e.target.value)}
      />
      </Grid>
      <Grid item sm={6} md={4} xs={12}>
          <TextField
        id="date"
        label="Enter End Date"
        type="date"
        size="small"
        // defaultValue={new Date(edit.EndDate)}
        value={moment(endDate).utc().format('YYYY-MM-DD')}
        name="EndDate"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setEndDate(e.target.value)}
      />
      </Grid>
      <Grid item sm={6} md={4} xs={12}>
          <TextField
        id="date"
        label="Enter Start Time"
        type="time"
        size="small"
        // defaultValue={edit.StartTime}
        value={startTime}
       
        name="StartTime"      
        placeholder="hrs:mins" 
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) =>setStartTime(e.target.value)}
      />
      </Grid>
      <Grid item sm={6} md={4} xs={12}>
          <TextField
        id="date"
        label="Enter End Time"
        type="time"
        size="small"
        // defaultValue={edit.EndTime}
        value={endTime}

        name="EndTime"
       
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) =>setEndTime(e.target.value)}
       

      />
      </Grid>
      </Grid>
      <Button
      variant="contained"
        type="submit"
        disableRipple
        disableElevation
        color="primary"
        sx={{ my: 4, mx: 2,width:'90px' }}
      >
        Add
      </Button>
<Link to='/BatchTable'>
      <Button    
      variant="contained"  
        disableRipple
        disableElevation
        color="secondary"
        sx={{ my: 4, mx: 4,width:'90px'}}
      >
        Back
      </Button>
      </Link>
    </form>
  );

  return <Box className="card">{form}</Box>;
}
