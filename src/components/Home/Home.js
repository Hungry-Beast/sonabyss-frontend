import React from 'react'
import styled from 'styled-components';
import Topbar from '../Navs/Topbar';
import Landing from './Landing/Landing';

const Component = styled.div`
   
   max-width: 1600px;
   width: 100%;
   min-height: 100vh;
   height: 100%;

`
const Home = () => {
  return (
    <Component>
        <Topbar/>
        {/* <Landing/> */}
    </Component>
  )
}

export default Home