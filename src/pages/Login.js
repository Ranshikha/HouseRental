import React, { useState } from "react";
import "./form.css";

function Login()
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
        <label for="email">Email:</label>
        <input id="email" type="email" onChange={cust2}/>
      </div>
      <div className="form-control">
        <label for="name">Password:</label>
        <input id="password" type="password" onChange={cust3}/>
      </div>
      <div className="form-control">
        <button className="btn-sign-up">Login</button>
      </div>
      <div className="more">
        <a className="forget-password-link" href="#">Forget password</a>
        <a className="sign-in-link" href="/register">Sign Up</a>
      </div>
    </form>
  </div>
</section>
        </div>
    )
}
export default Login;
