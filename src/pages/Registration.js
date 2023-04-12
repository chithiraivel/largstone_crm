import { Box, Breadcrumbs, Button, Grid, MenuItem, TextField, Typography, Link as Links, Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
// import axios from 'axios';
import moment from 'moment/moment';
import AppBreadcrumbs from '../pages/BreadCrumps';
import axios from 'axios';

export default function Registration(props) {

    const handleCrumbClick = (evnt) => {
        evnt.preventDefault();
    }
    const Batches = [
        { label: 'I',  },
        { label: 'II', },
        { label: 'III', },]

    const Batch = [{ batchID: "1", batchNum: "I", batchStartingDate: "01-04-2023" }, { batchID: "2", batchNum: "II", batchStartingDate: "03-05-2023" }, { batchID: "3", batchNum: "III", batchStartingDate: "02-07-2023" }];
    const breadCrumbs = [<Links underline="hover" href='/students' key="1" color="black" >Students Table</Links>,<Links underline="none" key="2" color="black" >Students Registration</Links>,];

    const [allRegister,setAllRegister]=useState({})
    console.log(allRegister);
    const [RegDate, setRegDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  
    const [StudentName, setStudentName] = useState("");
    const [StudentContactNumber, setStudentContactNumber] = useState("");
    const [Email, setEmail] = useState('');
    const [DOB, setDOB] = useState();

    const [SSLCboard, setSSLCboard] = useState('');
    const [SSLCschool, setSSLCschool] = useState('');
    const [SSLCpassedYear, setSSLCpassedYear] = useState('');
    const [SSLCPercentage, setSSLCPercentage] = useState('');

    const [HSCboard, setHSCboard] = useState('');
    const [HSCschool, setHSCschool] = useState('');
    const [HSCpassedYear, setHSCpassedYear] = useState('');
    const [HSCPercentage, setHSCPercentage] = useState('');

    const [UGDegreeName, setUGDegreeName] = useState('');
    const [UGCollegeName, setUGCollegeName] = useState('');
    const [UGCollegePassedYear, setUGCollegePassedYear] = useState('');
    const [UGCollegePercentage, setUGCollegePercentage] = useState('');

    const [PGDegreeName, setPGDegreeName] = useState('');
    const [PGCollegeName, setPGCollegeName] = useState('');
    const [PGCollegePassedYear, setPGCollegePassedYear] = useState('');
    const [GCollegePercentage, setPGCollegePercentage] = useState('');

    const [PhDMajor, setPhDMajor] = useState('');
    const [PhDCollegeName, setPhDCollegeName] = useState('');
    const [PhDPassedYear, setPhDPassedYear] = useState('');
    const [PhDPercentage, setPhDPercentage] = useState('');

    const [GuardianName, setGuardianName] = useState("");
    const [GuardianNumber, setGaurdianNumber] = useState("");
    const [ParentOccupation,setParentOccupation]=useState("")
    const [AdditionalCertificate, setAdditionalCertificate] = useState([{"id":1, "description":""}]);

    const [BatchNumber, setBatchNumber] = useState("I");    
    const [BatchStartingDate, setBatchStartingDate] = useState((moment(new Date()).format('YYYY-MM-DD'))); 
    const [CourseName, setCourseName] = useState(""); 
    const [AdmissionFee, setAdmissionFee] = useState(""); 
    const [Subjects, setSubject] = useState(""); 
    const [Duration, setDuration] = useState(""); 
    const [BatchName, setBatchName] = useState(""); 
    const [Session, setSession] = useState(""); 
   const [Batchlist,setBatchlist]=useState([])
    const [entrolled,setEntrolled]=useState('')
    const [Batchlist2,setBatchlist2]=useState([])
    const [entrolled2,setEntrolled2]=useState('')
 console.log(Batchlist2);
 console.log(entrolled2);
   allRegister.RegDate=RegDate;
   allRegister.CourseName=entrolled.CourseName
   allRegister.Subject=entrolled.Subject
   allRegister.Duration=entrolled.Duration
   allRegister.BatchName=entrolled2.BatchName
   allRegister.Session=entrolled2.Session
   allRegister.StartDate=entrolled2.StartDate



    const [CourseAdmissionFee, setCourseAdmissionFee] = useState(""); 

    // const dataCol = {studentName, studentNumber, email, parentName, RegDate, batchNumber}
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const OnSubmit = (data) => {
       
        };
        const confirm1 = ()=>{
            console.log('hii');
            axios.post("http://localhost:8000/StudentRegister/create",allRegister)
        }
    
    useEffect(() => {
        axios.post("http://localhost:8000/CourseDetails/view").then((res)=>setBatchlist(res.data.result.message.message))
        axios.post("http://localhost:8000/BatchDetails/view").then((res)=>setBatchlist2(res.data.result.message.message))
    },[])
    const handlesubmit = (e) => {e.preventDefault()};

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
      
            {/* <AppBreadcrumbs crntPage='Student Form' subpage='Students' path='/students'/> */}
            <Box sx={{ background: "#fff", pb: 3 }} className="card">
                <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Student Details</Typography>
                    </Grid>
                   
                    <Grid item xs={10} md={3.5}>
                        <TextField  name='StudentName' multiline {...register("StudentName", {required: "Enter the Student Name", maxLength: "20",})} error={Boolean(errors.StudentName)} helperText={errors.StudentName?.message} fullWidth onChange={(e)=>allRegister.StudentName=e.target.value} size='small' label="Student Name" />
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField  name='StudentContactNumber' label="Student contact Number" multiline {...register("StudentContactNumber", {required: "Enter contact number"})} error={Boolean(errors.StudentContactNumber)} helperText={errors.StudentContactNumber?.message} fullWidth onChange={(e)=>allRegister.StudentContactNumber=e.target.value} size='small'  />
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField  name='Email' multiline {...register("Email", {required: "Enter the E-mail"})} error={Boolean(errors.Email)} helperText={errors.Email?.message} fullWidth onChange={(e)=>allRegister.Email=e.target.value} size='small' label="Email" />
                    </Grid>

                    <Grid item xs={10} md={3.5}>
          <TextField
        id="date"
        label=" Date of birth"
        type="date"
        size="small"
        name="EndTime"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>allRegister.Date=e.target.value}
      />
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField label="Registration Date" InputLabelProps={{shrink:true}} id="date" name='RegDate' multiline type='date' fullWidth value={RegDate} onChange={(e)=>allRegister.RegDate=RegDate} size='small'  />
                    </Grid>
                </Grid> 

                <Box>
                    <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                        <Grid item xs={12}>
                            <Typography variant='h6'>Educational Details</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography sx={{fontWeight:"bold"}}>SSLC</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField name='TENboard' multiline {...register("TENboard", {required: "Enter the school board",})} error={Boolean(errors.TENboard)} helperText={errors.TENboard?.message} fullWidth onChange={(e)=>allRegister.TENboard=e.target.value} size='small' label="Board" />
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField name='TENschool' multiline {...register("TENschool", {required: "Enter the school Name",})} error={Boolean(errors.TENschool)} helperText={errors.TENschool?.message} fullWidth onChange={(e)=>allRegister.TENschool=e.target.value} size='small' label="School Name" />
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField fullWidth multiline label="Passed-out Year" size="small" onChange={(e)=>allRegister.TENpassedOut=e.target.value}/>
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField fullWidth  label="Percentage of Marks" size="small" multiline onChange={(e)=>allRegister.TENpercentage=e.target.value}/>
                        </Grid>
                    </Grid> 
                    <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                        <Grid item xs={12}>
                            <Typography sx={{fontWeight:"bold"}}>HSC</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField name='TWELFTHboard' multiline {...register("TWELFTHboard", {required: "Enter the school bosrd"})} error={Boolean(errors.TWELFTHboard)} helperText={errors.TWELFTHboard?.message} fullWidth onChange={(e)=>allRegister.TWELFTHboard=e.target.value} size='small' label="Board" />
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField name='TWELFTHschool' multiline {...register("TWELFTHschool", {required: "Enter the school Name",})} error={Boolean(errors.TWELFTHschool)} helperText={errors.TWELFTHschool?.message} fullWidth onChange={(e)=>allRegister.TWELFTHschool=e.target.value} size='small' label="School Name" />
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField fullWidth label="Passed-out Year" multiline size="small" onChange={(e)=>allRegister.TWELFTHpassedOut=e.target.value}/>
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField fullWidth label="Percentage of Marks" multiline size="small" onChange={(e)=>allRegister.TWELFTHpercentage=e.target.value}/>
                        </Grid>
                    </Grid> 
                    <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                        <Grid item xs={12}>
                            <Typography sx={{fontWeight:"bold"}}>Under Graduate</Typography>
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField name='DegreeName' multiline {...register("DegreeName", {required: "Enter the Degree", maxLength: "15",})} error={Boolean(errors.DegreeName)} helperText={errors.DegreeName?.message} fullWidth onChange={(e)=>allRegister.DegreeName=e.target.value} size='small' label="Degree" />
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField name='CollegeName' multiline {...register("CollegeName", {required: "Enter the College Name",})} error={Boolean(errors.CollegeName)} helperText={errors.CollegeName?.message} fullWidth onChange={(e)=>allRegister.CollegeName=e.target.value} size='small' label="College Name" />
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField fullWidth label="Passed-out Year" multiline size="small" onChange={(e)=>allRegister.UGpassedOut=e.target.value}/>
                        </Grid>
                        <Grid item xs={10} md={3.5}>
                            <TextField fullWidth label="Percentage of Marks" multiline size="small" onChange={(e)=>allRegister.UGpercentage=e.target.value}/>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Parent/Guardian Details</Typography>
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField  name='GuardianName' multiline {...register("GuardianName", {required: "Enter the Name",})} error={Boolean(errors.GuardianName)} helperText={errors.GuardianName?.message} fullWidth onChange={(e)=>allRegister.GuardianName=e.target.value} size='small' label="Guardian/Parent Name" />
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField name='ParentContactNumber' multiline {...register("ParentContactNumber", {required: "Enter the Parent Contact Number",})} error={Boolean(errors.ParentContactNumber)} helperText={errors.ParentContactNumber?.message} fullWidth onChange={(e)=>allRegister.ParentContactNumber=e.target.value} size='small' label="Parent Contact Number" />
                    </Grid>

                    <Grid item xs={10} md={3.5}>
                        <TextField name='ParentOccupation' multiline {...register("ParentOccupation", {required: "Enter the Parent Contact Number",})} error={Boolean(errors.ParentOccupation)} helperText={errors.ParentOccupation?.message} fullWidth onChange={(e)=>allRegister.ParentOccupation=e.target.value} size='small' label="ParentOccupation" />
                    </Grid>
                </Grid>

                <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Additional Certifications <Button color='primary' variant='contained' onClick={()=> setAdditionalCertificate([...AdditionalCertificate,{"id":AdditionalCertificate.length+1,"description":""}])}>Add<AddCircleOutlineIcon /></Button></Typography>
                    </Grid>
                    {AdditionalCertificate.map((val,ind) => {
                       return( <Grid item xs={10} md={3.5}> 
                        <TextField name='Certification' multiline  onChange={(e)=> AdditionalCertificate[ind].description=e.target.value} fullWidth label="add here" size='small'/>
                    </Grid>)
                   })}
                </Grid>
                
                <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Course Details</Typography>
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                    
                     <Autocomplete
                     onChange={(e,newValue)=> setEntrolled(newValue)}
                       options={Batchlist}
                       getOptionLabel={(option) => option.CourseName}

                     id="combo-box-demo"
 
                     size='small'
                      renderInput={(params) => <TextField multiline fullWidth size="small" {...params} label="Course" />}
                     >     
                         </Autocomplete>
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField name='AdmissionFee' multiline {...register("AdmissionFee", {required: "Enter the admission fee",})} fullWidth  size='small' label="Admission Fee" onChange={(e)=>allRegister.AdmissionFee=e.target.value}/>
                    </Grid>
                    {/* <Grid item xs={10} md={3.5}>
                    <Autocomplete  options={Batches}
                    disablePortal
                    id="combo-box-demo"

                    size='small'
                     renderInput={(params) => <TextField multiline fullWidth size="small" {...params} label="Batch" />}
                    >     
                        </Autocomplete>
                    </Grid> */}
                   
                    <Grid item xs={10} md={3.5}>
                        <TextField name='Subject' multiline aria-readonly value={entrolled.Subject || ""}  {...register("Subject", {required: "Enter Subject",})} fullWidth  size='small' label="Subject" onChange={(e)=>setSubject(e.target.value)}/>
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField name='Duration'  multiline aria-readonly value={entrolled.Duration || ""} {...register("Duration", {required: "Enter the Duration",})} fullWidth  size='small' label="Duration" onChange={(e)=>setDuration(e.target.value)} />
                    </Grid>
                </Grid>
                <Grid container rowGap={3} columnGap={5} paddingLeft={4} paddingTop={3}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>Batch Details</Typography>
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                    <Autocomplete
                     onChange={(e,newValue)=> setEntrolled2(newValue)}
                       options={Batchlist2}
                       getOptionLabel={(option) => option.BatchName}

                     id="combo-box-demo"
 
                     size='small'
                      renderInput={(params) => <TextField multiline fullWidth size="small" {...params} label="Batch" />}
                     >     
                         </Autocomplete>
                    </Grid>
                    <Grid item xs={10} md={3.5}>
                        <TextField name='Session' multiline value={entrolled2.Session || ""} {...register("Session", {required: "Enter the Session",})} fullWidth  size='small' label="Session" onChange={(e)=>setSession(e.target.value)}/>
                    </Grid>
                   
                    <Grid item xs={10} md={3.5}>
                        <TextField name='BatchStartDate' multiline type='date' value={moment(entrolled2.StartDate).utc().format('YYYY-MM-DD')}  fullWidth label="Batch Starting Date" size="small" />
                    </Grid> 
                </Grid>
                <Box sx={{mt:3,display:"flex",ml:4,  }}>
                    <Button variant='contained' type='submit' color='primary' onClick={confirm1}>Confirm</Button>
                    <Link to='/RegistrationTable'><Button sx={{ml:1,mx:4,width:'90px'}} variant='contained' color='secondary'>Back</Button></Link>
                </Box>
            </Box>
        </form>
  )
}