import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Timeline from "./components/Timeline/timeline.js";
import Login from "./components/Login/Login.js";
import SignUp from "./components/SignUp/SignUp.js";
import "./components/Timeline/teste.css";
import UserContext from './contexts/UserContext.js';
import TokenContext from "./contexts/TokenContext.js";
import "./css/reset.css"
import HashtagPage from "./components/HashtagPage/HashtagPage.js";
import User from "./components/User/User.js";

export default function App() {
  const [id,setId]=useState('0')
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    image: "",
    token: ""
  });
  const [token, setToken] = useState({ userId: "", token: "" });

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <TokenContext.Provider value={{ token, setToken }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/timeline" element={<Timeline setId={setId} id={id}/>} />
              <Route path="/user/:id" element={<User setId={setId} id={id}/>} />
              <Route path="/hashtag/:hashtag" element={<HashtagPage  setId={setId} id={id}/>} />
            </Routes>
          </TokenContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}