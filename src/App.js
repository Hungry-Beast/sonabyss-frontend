// import logo from "./logo.svg";
import "./App.css";
import EventPage from "./Components/Event/EventPage";
import styled from "styled-components";
import Home from "./Components/Home/Home";
import LogInPage from "./Components/LogIn/LogInPage";
import RegisterPage from "./Components/SignUp/RegisterPage";
import { Route, Routes } from "react-router-dom";

const Component = styled.div`
  width: 100%;
  min-height: 100%;
  background-color:#130912 ;
  display:flex;
  justify-content: center;

`;
function App() {
  return (
    <Component className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/signin" element={<LogInPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </Component>
  );
}

export default App;
