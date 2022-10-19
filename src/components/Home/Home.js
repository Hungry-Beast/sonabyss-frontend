import React from "react";
import styled from "styled-components";
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
const Home = ({ userAccess, setUserAccess, clubLoaded, setClubLoaded }) => {
  return (
    <Component>
      <div>
        <Topbar userAccess={userAccess} setUserAccess={setUserAccess} />
        <Landing />
      </div>
      <Bottom clubLoaded={clubLoaded} setClubLoaded={setClubLoaded} />
    </Component>
  );
};

export default Home;
