const express = require("express");
const app = express();
require("./connecttodb");
const User = require("./models/user");
const Notes = require("./models/notes");
const cors = require('cors');
app.use(express.json());
app.use(cors());


app.post("/submit", async (req, resp) => {
  if(req.body.Email && req.body.Password && req.body.Name && req.body.Email != "" && req.body.Password != "" && req.body.Name != "")
  {
    const d = await User.findOne({Email: req.body.Email});
    if(d != null)
    {
      resp.send({Message:"User with this email already exists !"});
    }else
    {
      const data = new User(req.body);
      const result = await data.save();
      resp.send(result);
    }
  }else
  {
    resp.send({Message:"Enter Complete Details !"});
  }
});

app.post("/login", async(req, resp)=>{
  if(req.body.Password != "" && req.body.Email != "" && req.body.Email && req.body.Password)
  {
    const data = await User.findOne(req.body);
    if(data)
    {
      resp.send(data);
    }else
    {
      resp.send({Message:"No user exists with these details !"})
    }
  }else
  {
    resp.send({Message:"Please enter complete details !"});
  }
})

app.post("/addnote", async (req, res)=>{
   const data = new Notes(req.body);
   const result = await data.save();
   res.send(result);
})

app.get('/getnotes/:id', async (req, res)=>{
   const data = await Notes.find({Userid: req.params.id});
   res.send(data);
})

app.delete('/delete/:id', async(req,res)=>{
   const result = await Notes.deleteOne({_id:req.params.id});
   res.send(result);
})

app.get('/getdata/:id', async(req, res)=>{
   const data = await Notes.findOne({_id: req.params.id});
   res.send(data);
})

app.put('/updatenote/:id', async(req, res)=>{
    const data = await Notes.updateOne(
      {
         _id:req.params.id
      },
      req.body
    )
    res.send(data);
})

app.listen(5000);
