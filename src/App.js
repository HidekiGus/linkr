import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Login from "./components/Login/Login.js"
import SignUp from "./components/SignUp.js";
import Timeline from "./components/Timeline/Timeline.js";


export default  function App() {


return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
    </BrowserRouter>
  </div>
 
)
}