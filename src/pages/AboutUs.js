import React, { useState } from "react";
import "./form.css";

function About()
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

    return(
        <><header className="defaultHero">
        <div className="banner">
          <h1> About Us </h1>
          <div></div>
          </div>
      </header>
      <section>
        <div className="single-house-info">
          <article className="desc">
            <h2>Hi Everyone,</h2>
            <p>
              This is Teams 2 from DF21. We are maintaning and progressing house rental to another level, just came up with this concept of having a right place at right time.<br></br>
              Can't belive that it worked.
            </p>
          </article>
        </div>
      </section>
      </>
    )
}
export default About;
