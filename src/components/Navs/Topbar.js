import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../config";
import { user } from "../../localStore";

const Component = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 2rem;
    padding-bottom: 0.2rem;
    z-index: 2;
`;
const LeftPart = styled.div`
    z-index: 2;
`;
const Logo = styled.img`
    height: 7rem;
    width: auto;
    z-index: 2;
`;
const RightPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 40%;
    margin-top: 1rem;

`;
const Button = styled.button`
    background-color: transparent;
    padding: 0;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    transition: 200ms ease-in-out;
    font-family: 'nightOfTerror';
    font-style: normal;
    font-weight: 400;
    &:hover{
        transform: translateY(-10%);
    }
`;

const Topbar = () => {
  return (
    <Component>
      <LeftPart>
        <Logo src={imgUrl + "/logo.svg"} />
      </LeftPart>
      <RightPart>
        {false ? (
          <></>
        ) : (
          <>
            <Button>EVENTS</Button>
            <Button>SCHEDULE</Button>
            <Button>SIGN IN</Button>
            <Button>REGISTER</Button>
          </>
        )}
      </RightPart>
    </Component>
  );
};

export default Topbar;
