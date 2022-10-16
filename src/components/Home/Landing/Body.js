import React from "react";
import styled from "styled-components";
import { phoneBreak, phoneBreakSm } from "../../../breakPoints";
import { imgUrl } from "../../../config";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 1000px;
  color: white;
  /* overflow-x: hidden; */
  @media (max-width: ${phoneBreak}) {
    flex-direction: row-reverse;
    margin-top: 2rem;
    min-height: 60vh;
    justify-content: center;
  }
`;
const LeftPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: ${phoneBreak}) {
    flex: 0;
  }
`;
const LeftUpperPart = styled.div`
  display: flex;
  position: relative;
  @media (max-width: ${phoneBreak}) {
    display: none;
  }
`;
const TriangleAndReady = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Triangle = styled.img`
  height: 10rem;
  /* position: absolute; */
  /* top: -10%; */
  transform: translateY(-8%);
  z-index: 2;
`;

const ReadyPart = styled.div`
  position: relative;
  transform: translateY(-19%);
  margin-left: 9%;
  z-index: 3;
`;
const ReadyImg = styled.img`
  height: 8rem;
  mix-blend-mode: normal;
  opacity: 0.7;
  /* box-shadow: 0px 23px 6px rgba(0, 0, 0, 0.25); */
  /* position: absolute; */
`;
const ReadyText = styled.h2`
  position: absolute;
  top: 22%;
  left: 14%;
  transform: rotate(7.68deg);
  font-family: "Midnight Minutes", sans-serif;
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`;
const CatAndMoon = styled.div`
  position: absolute;
  top: -20%;
  left: 53%;
  z-index: 2;

  /* display: none; */
`;
const Moon = styled.img`
  mix-blend-mode: difference;
  /* position: absolute; */
  width: 15rem;
  z-index: 1;
`;
const Cat = styled.img`
  background-color: transparent;
  mix-blend-mode: multiply;
  position: absolute;
  height: 13rem;
  position: absolute;
  left: 24%;
  top: 13%;
  z-index: 2;
`;
const LeftLowerPart = styled.div`
  /* display: none; */
  /* position: fixed;
  bottom: 0%; */
  @media(max-width:${phoneBreak}){
  display: none;
  }
`;
const LeftLowerPartPh = styled.div`
  display: none;
  @media (max-width: ${phoneBreak}) {
    display: none;
    position: absolute;
    bottom: 0%;
  }
`;
const SkeletonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 100;
`;
const Skeleton = styled.img`
  mix-blend-mode: exclusion;
  transform: matrix(1, 0, 0, 1, 0, 0);
  height: 10rem;
  @media (max-width: ${phoneBreak}) {
    height: 7rem;
    display: none;
  }
`;
const Rectangle = styled.div`
  position: absolute;
  background-color: #000000;
  width: 5rem;
  height: 9rem;
`;
const SkeletonText = styled.h2`
  font-family: "Midnight Minutes", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0;
  position: absolute;
  left: 42%;
`;
const SkeletonTextOutside = styled.h2`
  font-family: "Midnight Minutes", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0;
  text-align: left;
  margin-left: 0.8rem;
`;
const MiddlePart = styled.div`
  flex: 1.5;
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${phoneBreak}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* min-height: 80vh; */
`;
const Background = styled.img`
  /* position: absolute; */
  max-width: 46rem;
  width: 100%;
  left: -18%;
  top: -8%;
  @media (max-width: ${phoneBreak}) {
    /* position: absolute; */
    width: 100vw;
    left: -18%;
    top: -2%;
  }
`;
const WhiteLogoContainer = styled.div`
  z-index: 2;
  position: absolute;
  -webkit-transform: rotate(-6.63deg);
  -ms-transform: rotate(-6.63deg);
  transform: rotate(-6.63deg);
  bottom: 3%;
  left: 18%;
  @media (max-width: ${phoneBreak}) {
    /* position: relative; */
    bottom: 14%;
    left: 15%;
    /* margin: 0 auto; */
  }
  @media (max-width: ${phoneBreakSm}) {
    /* position: relative; */
    bottom: 25%;
    left: 15%;
    /* margin: 0 auto; */
  }
`;
const WhiteLogo = styled.img`
  /* position: absolute; */
  width: 20rem;
  @media (max-width: ${phoneBreakSm}) {
    width: 16rem;
  }
`;
const Date = styled.h2`
  margin: 0;
  mix-blend-mode: normal;
  text-shadow: 0px 10px 6pxrgba (0, 0, 0, 0.32);
  font-family: "Midnight Minutes", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  @media (max-width: ${phoneBreak}) {
    width: 14rem;
    font-size: 2rem;
  }
  transform: translateX(16%) translateY(-31%);
`;

const RightPart = styled.div`
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100%;
  @media (max-width: ${phoneBreak}) {
    padding-left: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    flex: 0;
    /* font-size: 1.7rem; */
  }
`;
const WelcomeText = styled.h2`
  font-family: "Midnight Minutes", sans-serif;
  font-style: normal;
  font-weight: 400;
  max-width: 16rem;
  font-size: 2rem;
  @media (max-width: ${phoneBreak}) {
    font-size: 1.7rem;
    margin-left: 2rem;
    position: absolute;
    width: 11rem;
    display: none;
  }
`;
const RegisterText = styled.h2`
  font-family: "Midnight Minutes", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  @media (max-width: ${phoneBreak}) {
    /* font-size: 1.7rem; */
    display: none;
  }
`;
const RegisterButton = styled.button`
  font-family: "Midnight Minutes", sans-serif;
  font-style: normal;
  font-weight: 400;
  background: #ff461f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 5px 6px 5px #ff1b12;
  border-radius: 165.5px;
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 0.2rem 1rem;
  margin-top: 5rem;
  @media (max-width: ${phoneBreak}) {
    /* font-size: 1.7rem; */
    display: none;
  }
`;
const Body = () => {
  return (
    <Component>
      <LeftPart>
        <LeftUpperPart>
          <TriangleAndReady>
            <Triangle src={imgUrl + "/triangle.svg"} />
            <ReadyPart>
              <ReadyImg src={imgUrl + "/readyBox.svg"} />
              <ReadyText>Are you ready yet?</ReadyText>
            </ReadyPart>
          </TriangleAndReady>
          <CatAndMoon>
            <Moon src={imgUrl + "/moon.png"} />
            <Cat src={imgUrl + "/cat.png"} />
          </CatAndMoon>
        </LeftUpperPart>
        <LeftLowerPart>
          <SkeletonContainer>
            <Rectangle />
            <Skeleton src={imgUrl + "/skeleton.png"} />
            <SkeletonText>
              trick <br /> or <br /> treat.
            </SkeletonText>
          </SkeletonContainer>
          <SkeletonTextOutside>
            “Can you survive the <br /> night?”
          </SkeletonTextOutside>
        </LeftLowerPart>
      </LeftPart>
      <MiddlePart>
        <Background src={imgUrl + "/background.png"} />
        <WhiteLogoContainer>
          <WhiteLogo src={imgUrl + "/logoWhite.png"} />
          <Date>3 Nov - 5 Nov</Date>
        </WhiteLogoContainer>
      </MiddlePart>
      <RightPart>
        <WelcomeText>
          Welcoming you to the most awaited fest of Arunachal Pradesh.
        </WelcomeText>
        <RegisterText>“Did you register?”</RegisterText>
        <RegisterButton>Register</RegisterButton>
        <LeftLowerPartPh>
          <SkeletonContainer>
            <Rectangle />
            <Skeleton src={imgUrl + "/skeleton.png"} />
            <SkeletonText>
              trick <br /> or <br /> treat.
            </SkeletonText>
          </SkeletonContainer>
          <SkeletonTextOutside>
            “Can you survive the <br /> night?”
          </SkeletonTextOutside>
        </LeftLowerPartPh>
      </RightPart>
    </Component>
  );
};

export default Body;
