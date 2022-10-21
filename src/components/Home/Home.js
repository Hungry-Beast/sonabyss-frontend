import React, { useState } from "react";
import styled from "styled-components";
import { imgUrl } from "../../config";
import Topbar from "../Navs/Topbar";
import Landing from "./Landing/Landing";
import Bottom from "./LandingSecond/Bottom";

const Component = styled.div`
  max-width: 1600px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  background-color: #130912;
  background-color: #130912;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;
const LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 100000;
  position: fixed;
  display: ${(props) => (props.isLoaded ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const LoadImg = styled.img`
  width: 20rem;
  @media (max-width: 992px) {
    width: 15rem;
  }
`;

const Home = ({ userAccess, setUserAccess }) => {
  const [clubLoaded, setClubLoaded] = useState(false);
  return (
    <>
      <Component>
        <div>
          <Topbar userAccess={userAccess} setUserAccess={setUserAccess} />
          <Landing />
        </div>
        <Bottom clubLoaded={clubLoaded} setClubLoaded={setClubLoaded} />
      </Component>
      <LoadingDiv isLoaded={!clubLoaded }>
        <LoadImg src={imgUrl + "/Load1.gif"} loading="eager" />
      </LoadingDiv>
    </>
  );
};

export default Home;
