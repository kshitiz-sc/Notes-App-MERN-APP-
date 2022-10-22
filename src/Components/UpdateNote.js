import React, { useEffect } from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function UpdateNote() {
    const [title, settitle] = useState("");
    const [note, setnote] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      filldata();
    },[])

    const filldata = async()=>{
        let result = await fetch(`http://localhost:5000/getdata/${params.id}`)
        result = await result.json();
        settitle(result.Title);
        setnote(result.Note);
    }
    const handleupdate = async()=>{
        let result = await fetch(`http://localhost:5000/updatenote/${params.id}`,{
            method:'PUT',
            body:JSON.stringify({
                Title:title,
                Note:note
            }),
            headers:{
                'content-Type':'application/json'
            }
        })
        alert('Note Updated !');
    }
  return (
    <div className="m-3">
      <div className="mb-3">
      <label htmlFor="title" className="form-label">
          Enter Note Title
        </label>
        <br />
        <input type="text" id="title" style={{'width':'100%'}} value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        <br />
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter the note here
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={note}
          onChange={(e)=>{setnote(e.target.value)}}
        ></textarea>
        <button style={{'marginTop':'10px'}} className="addnote" onClick={handleupdate}>Update note</button>
      </div>
    </div>
  )
}

export default UpdateNote