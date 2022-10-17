// import logo from "./logo.svg";
import "./App.css";
import EventPage from "./components/Event/EventPage";
import styled from "styled-components";
import Home from "./components/Home/Home";
import LogInPage from "./components/LogIn/LogInPage";
import RegisterPage from "./components/SignUp/RegisterPage";
import ErrorNet from "./components/Error_Page/ErrorNet";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Navs/Topbar";
import { useEffect, useState } from "react";

const Component = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #130912;
  display: flex;
  justify-content: center;
`;
function App() {
  const [userAccess, setUserAccess] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    setUserAccess(user);

  }, []);
  console.log(userAccess)
  return (
    <Component className="App">
      {/* <Topbar/> */}
      <Routes>
        <Route path="/" exact element={<Home setUserAccess={setUserAccess} userAccess={userAccess}/>} />
        <Route path="/events" element={<EventPage userAccess={userAccess}  setUserAccess={setUserAccess} />} />
        <Route path="/signin" element={<LogInPage setUserAccess={setUserAccess}/>} />
        <Route path="/signup" element={<RegisterPage setUserAccess={setUserAccess} />} />
      </Routes>
    </Component>
  );
}

export default App;
