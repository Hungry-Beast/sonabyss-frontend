import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../../config";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 80vh;
  color: white;
`;
const LeftPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LeftUpperPart = styled.div`
  display: flex;
  position: relative;
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
  z-index: 1;
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
  font-family: "midnight";
  font-size: 1.9rem;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`;
const CatAndMoon = styled.div`
  position: absolute;
  top: -20%;
  left: 53%;

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
  display: none;
`;
const SkeletonContainer = styled.div``;
const Skeleton = styled.img``;
const SkeletonText = styled.h2``;
const MiddlePart = styled.div`
  flex: 1.5;
`;
const RightPart = styled.div`
  flex: 1;
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
            <Skeleton src={imgUrl + "/skeleton.svg"} />
            <SkeletonText>trick or treat.</SkeletonText>
          </SkeletonContainer>
          <SkeletonText>“Can you survive the night?”</SkeletonText>
        </LeftLowerPart>
      </LeftPart>
      <MiddlePart>a</MiddlePart>
      <RightPart>a</RightPart>
    </Component>
  );
};

export default Body;
