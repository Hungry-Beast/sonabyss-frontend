import React from 'react'
import styled from 'styled-components';
import Landing from './Landing/Landing';

const Component = styled.div`
    background-color: #130912;
    height: 100%;
`
const Home = () => {
  return (
    <Component>
        <Landing/>
    </Component>
  )
}

export default Home