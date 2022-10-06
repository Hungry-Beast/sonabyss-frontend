import logo from "./logo.svg";
import "./App.css";
import EventPage from "./Components/EventPage";
import styled from "styled-components";
import Home from "./components/Home/Home";

const Component = styled.div`
  width: 100%;
  min-height: 100%;
`;
function App() {
  return (
    <Component className="App">
      <Home />
      <EventPage />
    </Component>
  );
}

export default App;
