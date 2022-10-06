// import logo from "./logo.svg";
import "./App.css";
import EventPage from "./components/Event/EventPage";
import styled from "styled-components";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

const Component = styled.div`
  width: 100%;
  min-height: 100%;
`;
function App() {
  return (
    <Component className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Routes>
    </Component>
  );
}

export default App;
