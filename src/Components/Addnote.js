import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
function Addnote() {
    const navigate = useNavigate();
    const auth = localStorage.getItem('currentuser');
    useEffect(()=>{
      if(auth == null)
      {
        navigate('/');
      }
    },[])
    const [notetext, setnotetext] = useState("");
    const [Title, setTitle] = useState("");
    const submitnote = async ()=>{
        if(notetext == "")
        {
            alert('Enter Something !');
            return;
        }
        const obj = JSON.parse(auth);
       const res = await fetch('http://localhost:5000/addnote',{
        method:'POST',
        body:JSON.stringify({
            Title:Title,
            Name:obj.Name,
            Note:notetext,
            Userid:obj._id
        }),
        headers:{
            'content-type':'application/json'
        }
       })
       navigate('/Yournotes');
    }
  return (
    <div className="m-3">
      <div className="mb-3">
      <label htmlFor="title" className="form-label">
          Enter Note Title
        </label>
        <br />
        <input type="text" id="title" style={{'width':'100%'}} onChange={(e)=>{setTitle(e.target.value)}}/>
        <br />
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter the note here
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={notetext}
          onChange={(e)=>{setnotetext(e.target.value)}}
        ></textarea>
        <button style={{'marginTop':'10px'}} className="addnote" onClick={submitnote}>Add note</button>
      </div>
    </div>
  );
}

export default Addnote;
