import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Yournotes() {
  let navigate = useNavigate();
  const auth = localStorage.getItem("currentuser");
  useEffect(() => {
    if (auth === null) {
      navigate("/");
      return;
    }
    getnotes();
  }, []);

  const getnotes = async ()=>{
   const obj = JSON.parse(auth);
   let result = await fetch(`http://localhost:5000/getnotes/${obj._id}`);
   result = await result.json();
   setnotesarray(result);
  }

  const handledelete = async (id)=>{
    const result = await fetch(`http://localhost:5000/delete/${id}`,{
      method:"DELETE",
    });
    getnotes();
  }
  const [notesarray, setnotesarray] = useState([])
  return (
    <>
      <div>
        {notesarray.map((item) => {
          return (
            <>
              <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <p>Added By:- {item.Name}</p>
                  <p className="card-text">
                    {item.Note}
                  </p>
                  <button className="btn btn-danger" onClick={()=>{handledelete(item._id)}}>Delete</button>
                  <button className="btn btn-primary" style={{'marginLeft':'5px'}} onClick={()=>{navigate(`/update/${item._id}`)}}>Update</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Yournotes;
