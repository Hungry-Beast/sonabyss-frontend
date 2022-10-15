import React from "react";
import styled from "styled-components";
import { phoneBreak } from "../../../breakPoints";
import Body from "./Body";

const Component = styled.div`
  height: 100%;
  /* overflow: hidden; */
`;
const BlackBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  width: 80%;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 36px;
  max-width: 600px;
  @media(min-width:${phoneBreak}){
    display: none;
  }
`;
const RegisterText = styled.h2`
  font-family: "midnight";
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  margin: 1rem 0;
  @media (max-width: ${phoneBreak}) {
    /* font-size: 1.7rem; */
    /* display: none; */
  }
`;
const RegisterButton = styled.button`
  font-family: "midnight";
  font-style: normal;
  font-weight: 400;
  background: #ff461f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 5px 6px 5px #ff1b12;
  border-radius: 165.5px;
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 0.2rem 1rem;
  /* margin-top: 5rem; */
  @media (max-width: ${phoneBreak}) {
    /* font-size: 1.7rem; */
    /* display: none; */
  }
  color: white;
  color: #000;
`;

const Landing = () => {
  return (
    <Component>
      <Body />
      <BlackBox>
        <RegisterText>“Did you register?”</RegisterText>
        <RegisterButton>Register</RegisterButton>
      </BlackBox>
    </Component>
  );
};

export default Landing;
