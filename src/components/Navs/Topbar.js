import { Logout } from "@mui/icons-material";
import { Avatar, IconButton, ListItemIcon, Menu, Tooltip } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { phoneBreak } from "../../breakPoints";
import { imgUrl, pdfUrl, prodURL } from "../../config";
// import { user } from "../../localStore";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 2rem;
  padding-bottom: 0.2rem;
  z-index: 2;
  overflow: hidden;
  /* position: relative; */
  /* width: 100%; */
  /* overflow: hidden; */
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
  /* overflow-x: hidden; */
  /* position: relative; */
`;
const HamburgerMenu = styled.div`
  /* position: relative; */
  display: none;
  @media (max-width: ${phoneBreak}) {
    display: block;
  }
`;
const HamburgerMenuIcon = styled.img``;
const PhoneMenuComponent = styled.div`
  transition: 500ms ease-in-out;
  display: ${(props) => (props.openMenu ? "block" : "hidden")};
  transform: translateX(${(props) => (props.openMenu ? "0" : "100%")});
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #130912;
  left: 0;
  z-index: 100;
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
  /* cursor: pointer; */
`;
const MenuLogoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* font-family: "bloodsuckers"; */
  font-family: "Creepster",cursive;
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
const SceduleButton = styled.a`
  text-decoration: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  transition: 200ms ease-in-out;
  /* font-family: "bloodsuckers"; */
  font-family: "Creepster",cursive;
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
const ButtonLog = styled.button`
  text-decoration: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  transition: 200ms ease-in-out;
  font-family: "bloodsuckers";
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

const Topbar = ({userAccess,setUserAccess}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [userAccess, setUserAccess] = useState();
  // const [userInfo, setUserInfo] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const getUserInfo = () => {
  //   var myHeaders = new Headers();
  //   const user = localStorage.getItem("user")
  //     ? JSON.parse(localStorage.getItem("user"))
  //     : null;
  //   if (user) {
  //     myHeaders.append("Authorization", "Bearer " + user.authToken);

  //     var requestOptions = {
  //       method: "GET",
  //       headers: myHeaders,
  //       redirect: "follow",
  //     };

  //     fetch(prodURL + "/auth/getuser", requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         localStorage.setItem("userInfo", JSON.stringify(result));
  //         setUserInfo(result);
  //       })
  //       .catch((error) => console.log("error", error));
  //   }
  // };
  // useEffect(() => {
  //   // console.log(user);
  //   const user = localStorage.getItem("user")
  //     ? JSON.parse(localStorage.getItem("user"))
  //     : null;
  //   // if()
  //   if (user) {
  //     getUserInfo();
  //   }

  //   setUserAccess(user);
  // }, []);
  console.log(userAccess);
// userAccess
  return (
    <Component className="topbar">
      <LeftPart>
        <Link to="/">
          <Logo src={imgUrl + "/logo.svg"} />
        </Link>
      </LeftPart>
      <RightPart>
        <PcMenu>
          {userAccess ? (
            <>
              <Button to="/events">EVENTS</Button>
              <SceduleButton  href={pdfUrl} download target="_blank">
                SCHEDULE
              </SceduleButton>
              {/* <Button to="/signin">SIGN IN</Button> */}
              <Button>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="large"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      {userAccess.name ? userAccess.name[0] : "A"}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button to="/events">EVENTS</Button>
              <SceduleButton  href={pdfUrl}  target="_blank">
                SCHEDULE
              </SceduleButton>
              <Button to="/signin">SIGN IN</Button>
              <Button to="/signup">SIGN UP</Button>
            </>
          )}
        </PcMenu>
        <HamburgerMenu>
          <HamburgerMenuIcon
            onClick={() => setOpenMenu(true)}
            src={imgUrl + "/hambergerIcon.svg"}
          />
          <PhoneMenuComponent openMenu={openMenu}>
            <CloseDiv>
              <CloseIcon
                onClick={() => setOpenMenu(false)}
                src={imgUrl + "/closeIcon.svg"}
              />
            </CloseDiv>
            <MenuLogoDiv>
              <MenuLogo src={imgUrl + "/logoWB.png"} />
            </MenuLogoDiv>
            <MobileMenuContainer>
              <Button to="/events">EVENTS</Button>
              <SceduleButton  href={pdfUrl} download target="_blank">
                SCHEDULE
              </SceduleButton>
              {userAccess ? (
                <ButtonLog
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </ButtonLog>
              ) : (
                <>
                  <Button to="/signin">SIGN IN</Button>
                  <Button to="/signup">SIGN UP</Button>
                </>
              )}
            </MobileMenuContainer>
          </PhoneMenuComponent>
        </HamburgerMenu>
      </RightPart>
    </Component>
  );
};

export default Topbar;
