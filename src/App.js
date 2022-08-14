import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Timeline from "./components/Timeline/timeline.js";
import Login from "./components/Login/Login.js";
import SignUp from "./pages/SignUp.js";
import "./components/Timeline/teste.css";
import TokenContext from "./contexts/TokenContext.js";
// import UserContext from './contexts/UserContext.js';
import"./css/reset.css"


export default  function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    image: "",
    token: ""
  });
  const [token, setToken] = useState({userId: "", token: ""});

  return (
    <div >
    <BrowserRouter>
    {/* <UserContext.Provider value={{ user, setUser }}> */}
    <TokenContext.Provider value={{ token, setToken }}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/timeline" element={<Timeline  />} />
      </Routes>
    </TokenContext.Provider>
    {/* </UserContext.Provider> */}
    </BrowserRouter>
  </div>
)
//<UserContext.Provider value={{ user, setUser }}>
//</UserContext.Provider>
}