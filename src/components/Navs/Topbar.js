import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { phoneBreak } from "../../breakPoints";
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
  overflow: hidden;
`;
const LeftPart = styled.div`
  @media (max-width: ${phoneBreak}) {
    width: 60%;
  }
  z-index: 3;
`;
const Logo = styled.img`
  width: 100%;
  max-height: 10rem;
  @media (min-width: ${phoneBreak}) {
    height: 7rem;
    width: auto;
    z-index: 2;
  }
`;
const RightPart = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  /* width: 40%; */
  margin-top: 1rem;
`;
const HamburgerMenu = styled.div`
  /* position: relative; */
  display: none;
`;
const HamburgerMenuIcon = styled.img``;
const PhoneMenuComponent = styled.div`
  transition: 500ms ease-in-out;
  transform:translateX(${(props) => (props.open ? "0" : "100%")});
  flex-direction: column;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #130912;
  left: 0;
  z-index: 10;
  top: 0;
`;
const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  /* padding: 2rem 0; */
`;
const CloseIcon = styled.img`
  width: 2rem;
  margin-top: 2rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;
const MenuLogo = styled.img`
  width: 80%;
  margin: 2rem auto;
`;
const PcMenu = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

const MobileMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;
const Button = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  transition: 200ms ease-in-out;
  font-family: "nightOfTerror";
  font-style: normal;
  font-weight: 400;
  margin: 1rem auto;
  cursor: pointer;
  @media (min-width: ${phoneBreak}) {
    margin: 0 1rem;
  }
  &:hover {
    transform: translateY(-10%);
  }
`;

const Topbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Component>
      <LeftPart>
        <Logo src={imgUrl + "/logo.svg"} />
      </LeftPart>
      <RightPart>

        <PcMenu>
          {user ? (
            <></>
          ) : (
            <>
              <Button to="/events">EVENTS</Button>
              <Button to="/schedule">SCHEDULE</Button>
              <Button to="/signin">SIGN IN</Button>
              <Button to="signup">SIGN UP</Button>
            </>
          )}
        </PcMenu>
        <HamburgerMenu>
          <HamburgerMenuIcon onClick={()=>setOpen(true)} src={imgUrl + "/hambergerIcon.svg"} />
          <PhoneMenuComponent open={open}>
            <CloseDiv>
              <CloseIcon onClick={()=>setOpen(false)} src={imgUrl + "/closeIcon.svg"} />
            </CloseDiv>
            <MenuLogo src={imgUrl + "/logoWB.png"} />
            <MobileMenuContainer>
              <Button to="#">EVENTS</Button>
              <Button to="#">SCHEDULE</Button>
              <Button to="#">SIGN IN</Button>
              <Button to="#">SIGN UP</Button>
            </MobileMenuContainer>
          </PhoneMenuComponent>
        </HamburgerMenu>

      </RightPart>
    </Component>
  );
};

export default Topbar;
