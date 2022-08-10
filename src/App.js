import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Login from "./components/Login/Login.js"


export default  function App() {


return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      

    </Routes>
    </BrowserRouter>
  </div>
 
)
}