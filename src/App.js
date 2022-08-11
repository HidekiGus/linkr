import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Login from "./components/Login/Login.js"
import SignUp from "./components/SignUp.js";
import UserContext from "./contexts/UserContext.js";


export default function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    image: "",
    token: ""
  });

  return (
    <div >
      <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}