import React from 'react'
import styled from 'styled-components';
import Topbar from '../Navs/Topbar';
import Landing from './Landing/Landing';
import Bottom from './LandingSecond/Bottom';

const Component = styled.div`
    background-color: #130912;
    height: 100%;
`
const Home = () => {
  return (
    <Component>
      <Topbar />
      <Landing />
      <Bottom />
    </Component>
  )
}

export default Home