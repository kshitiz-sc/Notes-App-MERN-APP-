import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
function Signup() {
  const navigate = useNavigate();
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const handlechangeuser = (e)=>{
    setname(e.target.value);
  }
  const handlechangeemail = (e)=>{
    setemail(e.target.value);
  }
  const handlechangepassword = (e)=>{
    setpassword(e.target.value);
  }
  const handlesubmit = async()=>{
    let apiresult = await fetch('http://localhost:5000/submit', {
      method:"POST",
      body:JSON.stringify({
        Name:name,
        Email:email,
        Password:password
      }),
      headers:{
        'Content-type':'application/json'
      }
    })
    apiresult = await apiresult.json();
    if(apiresult.Message != undefined)
    {
      alert(apiresult.Message);
    }else
    {
      localStorage.setItem('currentuser', JSON.stringify(apiresult));
      navigate('/home')
    }
  }

  return (
    <>
    <div className='m-5'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" value={name} onChange={handlechangeuser} placeholder="Enter your user name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={handlechangeemail} placeholder="Enter your email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="paswword" value={password} onChange={handlechangepassword} placeholder="Enter your password"/>
  </div>
  <div>
  <button className="btn btn-primary" onClick={handlesubmit}>Create Account</button>
  </div>
  </div>
    </>
  )
}

export default Signup