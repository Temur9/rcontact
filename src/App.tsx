import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact/Contact";
import Navbar from "./navbar/Navbar";
import Login from "./registration/Login";
import SignUp from "./registration/SignUp";




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
