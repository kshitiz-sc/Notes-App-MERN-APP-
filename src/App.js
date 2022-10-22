import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";  // This is necessary to use the Links in Navbar
import Signup from './Components/Signup';
import Yournotes from './Components/Yournotes';
import Login from './Components/Login';
import Addnote from './Components/Addnote';
import UpdateNote from './Components/UpdateNote';
function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Yournotes' element={<Yournotes/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/addnote' element={<Addnote/>}/>
      <Route path='/update/:id' element={<UpdateNote/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
