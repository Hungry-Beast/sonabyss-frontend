import Topbar from "../Navs/Topbar";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { imgUrl, prodURL } from "../../config";
import { useLocation, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { Backdrop, Modal } from "@mui/material";
import PaymentPopUp from "./PaymentPopUp";

const CentralContainer = styled.div`
  width: 100%;
  background-color: #241222;
  height: 100vh;
`;

const SemiContainer = styled.div`
  position: relative;
  max-width: 1600px;
  background-color: #130912;
  margin: 0 auto;
  padding: 0 0 80px 0;
  @media screen and (max-width: 850px) {
    width: 100%;
    overflow: hidden;
  }
`;

const BackIcon = styled.img`
  height: 50px;
  width: 50px;
  display: none;
  margin: 30px 0 0 15px;
  @media screen and (max-width: 850px) {
    display: inline;
  }
`;

// const ClubsBtn = styled.a`
//     padding: 10px 45px;
//     color: white;
//     border-radius: 30px;
//     text-decoration: none;
//     border: 3.2px solid red;
//     position: absolute;
//     font-size: 21px;
//     top: 68%;
// `
export const ImageContainer = styled.div`
  height: 130%;
  width: 100%;
  max-height: 1000px;
  max-width: 1150px;
  position: absolute;
  top: 32%;
  right: 50%;
  mix-blend-mode: color-dodge;
  z-index: 2;
  transform: translate(50%, -50%);
  @media screen and (max-width: 850px) {
    width: 190%;
    height: 120%;
    max-height: 600px;
    top: 40%;
  }
  @media screen and (max-width: 480px) {
    top: 45%;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  mix-blend-mode: color-dodge;
`;

const LowerHalf = styled.div`
  width: 100%;
  position: relative;
`;
const ContentDiv = styled.div`
  border: 3px solid pink;
  width: 92%;
  min-height: 450px;
  height: 140%;
  margin: 0 auto;
  background: rgba(62, 28, 51, 0.38);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  margin-top: 30px;
  position: relative;
  z-index: 3;
  @media screen and (max-width: 850px) {
    width: 90%;
    display: block;
    padding-bottom: 40px;
  }
`;
const NameCard = styled.div`
  min-height: 340px;
  height: 21%;
  min-width: 280px;
  padding: 9px;
  width: 21%;
  background-color: black;
  margin-left: 20px;
  border-radius: 16px;
  @media screen and (max-width: 1370px) {
    min-height: 330px;
    min-width: 270px;
  }
  @media screen and (max-width: 850px) {
    min-width: 0;
    min-height: 0;
    width: 60%;
    height: 25%;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
const NameCardImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 16px;
`;

const DetailsHolder = styled.div`
  width: 85%;
  margin-left: 6%;
  height: 100%;
  @media screen and (max-width: 850px) {
    margin: 0 auto;
    margin-top: 15%;
  }
`;
const DetailText = styled.div`
  display: flex;
  margin: 0 0 20px 10px;
  gap: 10%;
  @media screen and (max-width: 850px) {
    display: block;
    text-align: center;
    margin: 0 10% 0 0;
  }
`;
const DetailName = styled.h2`
  color: white;
  font-family: "midnight";
  font-size: 27px;
  font-weight: 700;
  /* margin-left: 10%; */
  @media screen and (max-width: 850px) {
    font-size: 25px;
    margin-left: 10%;
  }
`;

const DetailsCard = styled.div`
  max-height: 260px;
  width: 90%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.72);
  padding: 10px 30px 10px 30px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    min-height: 400px;
    margin: 0 auto;
    max-width: auto;
    padding-bottom: 50px;
  }
`;

const SkeletonAndButton = styled.div`
  max-width: 200px;
  width: 20%;
  height: 100%;
  text-align: center;
  margin: 7% 5px 0 0;
  @media screen and (max-width: 1288px) {
    width: 180px;
    height: 280px;
  }
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const SkeletonImg = styled.img`
  width: 100%;
  height: 76%;
  margin-bottom: -20px;
`;
const RegisterBtn = styled.button`
  padding: 10px 25px;
  background: #ff0000;
  box-shadow: 0px 6px 0px #44003d;
  border-radius: 50px;
  border: transparent;
  font-weight: 800;
`;

const RegisterBtnDisabled = styled.div`
  display: none;
  padding: 10px 25px;
  background: #ff461f;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25), 4.2px 3.5px 3px 3px #ff1b12;
  border-radius: 50px;
  border: transparent;
  font-weight: 800;

  @media screen and (max-width: 850px) {
    display: inline;
    margin: 0 0 30px 28%;
  }

  span {
    color: #fff !important;
  }
`;

const H2 = styled.h2`
  color: white;
  font-weight: 300;
`;

const H3 = styled.h3`
  color: white;
  font-weight: 300;
`;
const Div = styled.div`
  color: white !important;
  p {
    margin: 0 !important;
  }
  span {
    color: #fff !important;
  }
  br {
    display: none;
  }
`;

const PaymentBtn = styled.button`
  padding: 10px 25px;
  background: #ff0000;
  border: transparent;
  font-size: 18px;
  font-weight: 600;
  color: white;
`

const ViewDetails = () => {
  const location = useLocation();
  console.log(location.pathname.split("/"));
  const tempUrl = location.pathname.split("/")[2];
  const [details, setDetails] = useState();
  const [modal, setModal] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [userAccess, setUserAccess] = useState();
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const navigate = useNavigate();

  const getDetails = () => {
    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    var myHeaders = new Headers();
    setRegisterLoading(true);
    let url;
    if (user) {
      myHeaders.append("Authorization", "Bearer " + user.authToken);
      url = `${prodURL}/events/event/${tempUrl}`;
    } else {
      url = `${prodURL}/events/event/noAuth/${tempUrl}`;
    }
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDetails(result);
        setRegisterLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setRegisterLoading(false);
      });
  };

  const handleClick = (file) => {
    console.log(file);

    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    if (user) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + user.authToken);
      // myHeaders.append("Content-Type", "application/json");
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      const formattedToday = dd + "/" + mm + "/" + yyyy;
      //   console.log(data);
      var formdata = new FormData();
      formdata.append("date", formattedToday);
      formdata.append("clubId", details.club);
      formdata.append("clubName", details.clubName);
      formdata.append("eventId", details.id);
      formdata.append("eventName", details.eventName);
      if (file) {
        formdata.append("file", file);
      }
      setModal(false);
      // var raw = JSON.stringify({
      //   date: formattedToday,
      //   clubId: selectedClub.value,
      //   clubName: selectedClub.value,
      //   eventId: details.id,
      //   eventName: details.name,
      // });
      // console.log(raw);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      setRegisterLoading(true);
      fetch(prodURL + "/registration", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setRegisterLoading(false);
          console.log(result);
          getDetails();
          //   getEvents(selectedClub.value);
        })
        .catch((error) => {
          console.log("error", error);
          setRegisterLoading(false);
        });
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    setUserAccess(user);
    getDetails();
  }, []);

  console.log(details);

  return (
    <CentralContainer>
      <SemiContainer>
        <BackIcon
          onClick={() => {
            navigate(-1);
          }}
          src={imgUrl + "/backarrow.svg"}
        />
        <Topbar />
        <LowerHalf>
          <ImageContainer>
            <Image src={imgUrl + "/Homepage.png"} />
          </ImageContainer>
          <ContentDiv>
            <NameCard>
              <NameCardImg src={details?.image} />
            </NameCard>
            <DetailsHolder>
              <DetailText>
                <DetailName>{details?.name}</DetailName>
                {details?.isPaid && <DetailName>Payment Status : <PaymentBtn>{details?.isVerified === 0 ? "PENDING" : details?.isVerified === 1 ? "VERIFIED" : "REJECTED"}</PaymentBtn> </DetailName>}
              </DetailText>

              <DetailsCard>
                <H2>{details?.isMainEvent ? "Main Event" : "Pre Event"} </H2>
                <H3>DATE : {details?.date} </H3>
                <H3>TIME : {details?.time} </H3>
                <Div>{details && details.desc && parse(details?.desc)}</Div>

                <RegisterBtnDisabled
                  disabled={details?.isRegistered || details?.disabled}
                  onClick={() => {
                    !userAccess
                      ? navigate("/signin")
                      : details?.isPaid
                        ? setModal(true)
                        : handleClick();
                  }}
                >
                  {details?.isRegistered ? "Registered" : "Register"}
                </RegisterBtnDisabled>
              </DetailsCard>
            </DetailsHolder>
            <SkeletonAndButton>
              <SkeletonImg src={imgUrl + "/Group 3.svg"} />
              {/* <h1>Payment Status : </h1> <br /> */}
              <RegisterBtn
                onClick={() => {
                  !userAccess
                    ? navigate("/signin")
                    : details?.isPaid
                      ? setModal(true)
                      : handleClick();
                }}
              >
                {details?.isRegistered ? "Registered" : "Register"}
              </RegisterBtn>
            </SkeletonAndButton>
          </ContentDiv>
        </LowerHalf>
      </SemiContainer>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        <PaymentPopUp
          data={details}
          handleClose={handleClose}
          handleClick={handleClick}
        />
        {/* </Box> */}
      </Modal>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={registerLoading}
      // onClick={handleClose}
      >
        {/* <CircularProgress color="inherit" /> */}
        <img
          style={{
            width: "15rem",
          }}
          src={imgUrl + "/imageLoading.gif"}
        />
      </Backdrop>
    </CentralContainer>
  );
};

export default ViewDetails;
