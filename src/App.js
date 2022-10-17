// import logo from "./logo.svg";
import "./App.css";
import EventPage from "./components/Event/EventPage";
import styled from "styled-components";
import Home from "./components/Home/Home";
import LogInPage from "./components/LogIn/LogInPage";
import RegisterPage from "./components/SignUp/RegisterPage";
import ErrorNet from "./components/Error_Page/ErrorNet";

// import Home from "./Components/Home/Home";
// import LogInPage from "./Components/LogIn/LogInPage";
// import RegisterPage from "./Components/SignUp/RegisterPage";
// >>>>>>> 6936a459d3196179c2df24b4483d7f28341296db
import { Route, Routes } from "react-router-dom";
// import Topbar from "./components/Navs/Topbar";

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
      {/* <Topbar/> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/signin" element={<LogInPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/error" element={<ErrorNet />} />
      </Routes>
    </Component>
  );
}

export default App;
