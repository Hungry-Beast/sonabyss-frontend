import React from 'react'
import styled from 'styled-components';
import Topbar from '../../Navs/Topbar';

const Component=styled.div`
    height: 100%;
`
const Landing = () => {
  return (
    <Component>
        <Topbar/>
    </Component>
  )
}

export default Landing