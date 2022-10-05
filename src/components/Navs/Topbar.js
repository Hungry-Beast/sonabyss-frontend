import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../config";
import { user } from "../../localStore";

const Component = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    padding-bottom: 0.2rem;
`;
const LeftPart = styled.div``;
const Logo = styled.img`
    height: 5rem;
    width: auto;

`;
const RightPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 40%;

`;
const Button = styled.button`
    background-color: transparent;
    padding: 0;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.3rem;
    transition: 200ms ease-in-out;
    font-family: 'nightOfTerror';
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
        {user ? (
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
