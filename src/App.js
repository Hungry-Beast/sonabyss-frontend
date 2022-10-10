import logo from "./logo.svg";
import styled from 'styled-components';
import "./App.css";
import Home from "./components/Home/Home";

const Component=styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #130912;
  display: flex;
  justify-content: center;
`
function App() {
  return (
    <Component className="App">
        <Home/>
    </Component>
  );
}

export default App;
