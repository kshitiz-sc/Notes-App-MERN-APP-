import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
    // useEffect(() => {
    //     const auth = localStorage.getItem('currentuser');
    //     if(auth != null)
    //     {
    //        navigate('/home');
    //     }
    //   },[])
      
      const navigate = useNavigate();
      const [loginname, setloginname] = useState("")
      const [loginemail, setloginemail] = useState("")
      const [loginpassword, setloginpassword] = useState("")
      const handlechangeuser = (e)=>{
        setloginname(e.target.value);
      }
      const handlechangeemail = (e)=>{
        setloginemail(e.target.value);
      }
      const handlechangepassword = (e)=>{
        setloginpassword(e.target.value);
      }
      const handlelogin = async()=>{
        let result = await fetch('http://localhost:5000/login',{
            method:"POST",
            body:JSON.stringify({
                Email:loginemail,
                Password:loginpassword
            }),
            headers:{
                'Content-type':'application/json'
            }
        })
        result = await result.json();   // We need to convert it into json because it is initially in readable stream
        if(result.Message != null)
        {
           alert(result.Message);
        }else
        {
            localStorage.setItem('currentuser', JSON.stringify(result));
            navigate('/yournotes');
        }
      }
    
      return (
        <>
        <div className='m-5'>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" value={loginname} onChange={handlechangeuser} placeholder="Enter your user name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={loginemail} onChange={handlechangeemail} placeholder="Enter your email"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="paswword" value={loginpassword} onChange={handlechangepassword} placeholder="Enter your password"/>
      </div>
      <div>
      <button className="btn btn-primary" onClick={handlelogin}>Log In</button>
      </div>
      </div>
        </>
      )
}

export default Login