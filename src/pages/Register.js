import React, { useState } from "react";
import "./form.css";
//import DatePicker from 'react-date-picker';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

function Register()
{
const[userid,setuserid]=useState('')
const[firstname,setfirstname]=useState('')
const[lastname,setlastname]=useState('')
const[password1,setpassword1]=useState('')
const[repassword1,setrepassword1]=useState('')
const[dob,setdob]=useState('')
const[gender,setgender]=useState('')
const[emailid,setemailid]=useState('')
const[contactno,setcontactno]=useState('')
const[address1,setaddress1]=useState('')
const[district,setdistrict]=useState('')
const[state1,setstate1]=useState('')
const[country,setcountry]=useState('')
const[pincode,setpincode]=useState('')
const[secquestion,setsecquestion]=useState('')
const[secanswer,setsecanswer]=useState('')
// const [value, onChange] = useState(new Date());


   
function register1(e)
 {
  //alert('hello')
  let data={userid,firstname,lastname,password1,repassword1,dob,gender,emailid,contactno,address1,district,state1,country,pincode,secquestion,secanswer}
  fetch('https://localhost:3000/api/cust',{
   method:'POST',
   headers:{
   'Content-Type':'application/json'
   },
   body:JSON.stringify(data)
   }).then((result)=>{
   result.json().then((resp)=>{
   console.warn("resp",resp)
   })
   })
  }    
        
    


    function cust1(e)
    {
        setuserid(e.target.value)
    }

    function cust2(e)
    {
        setfirstname(e.target.value)
    }

    function cust3(e)
    {
        setlastname(e.target.value)
    }

    function cust4(e)
    {
        setpassword1(e.target.value)
    }

    function cust5(e)
    {
        setrepassword1(e.target.value)
    }

    return(

        <div>  
           <section className="section-sign-up">
  <div className="sign-up-card">
    <div className="view">
      <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      <span className="check">
        <i className="fas fa-check"></i>
      </span>
    </div>
    <form className="form"  onSubmit={register1}>
    <div className="form-control">
        <label for="name">First Name:</label>
        <input id="name" type="text" onChange={cust1} />
      </div>
      <div className="form-control">
        <label for="name">Last Name:</label>
        <input id="name" type="text" onChange={cust1} />
      </div>
      <div className="form-control">
        <label for="name">Contact Number</label>
        <input id="name" type="text" onChange={cust1} />
      </div>
      <div className="form-control">
        <label for="email">Email:</label>
        <input id="email" type="email" onChange={cust2}/>
      </div>
      {/* <div>
      <DatePicker onChange={onChange} value={value} />
    </div> */}
      <div className="form-control">
        <label for="dob">DOB</label>
        <input id="dob" type="dob" onChange={cust2}/>
      </div>
      
      {/* <div className="form-control">
        <span>
      <input id="gender" type="radio" value="Male" name="gender" onChange={cust2}/> Male
        <input id="gender" type="radio" value="Female" name="gender" onChange={cust2}/> Female
        <input id="gender" type="radio" value="Other" name="gender" onChange={cust2}/> Other
        </span>
      </div> */}

{/* <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl> */}

      <div className="form-control">
        <label for="name">Password:</label>
        <input id="password" type="password" onChange={cust3}/>
      </div>

      <div className="form-control">
        <button className="btn-sign-up">Sign Up</button>
      </div>
      <div className="more">
        <a className="forget-password-link" href="#">Forget password</a>
        <a className="sign-in-link" href="/login">Sign In</a>
      </div>
    </form>
  </div>
</section>
        </div>
    )
}
export default Register;
