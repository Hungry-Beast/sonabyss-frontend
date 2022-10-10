// import logo from "./logo.svg";
import "./App.css";
import EventPage from "./components/Event/EventPage";
import styled from "styled-components";
import Home from "./components/Home/Home";
import LogInPage from "./components/LogIn/LogInPage";
import RegisterPage from "./components/SignUp/RegisterPage";
import { Route, Routes } from "react-router-dom";

const Component = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 1600px;
  
`;
function App() {
  return (
    <Component className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Component>
  );
}

export default App;
