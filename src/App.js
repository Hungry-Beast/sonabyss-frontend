import logo from "./logo.svg";
import styled from 'styled-components';
import "./App.css";
import Home from "./components/Home/Home";

const Component=styled.div`
  width: 100%;
  min-height: 100%;
`
function App() {
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
