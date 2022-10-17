import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { prodURL } from "../../config";
import { phoneBreak } from "../../breakPoints";
import "./Style.css";
import { Backdrop, CircularProgress, Modal } from "@mui/material";
import PaymentPopUp from "./PaymentPopUp";

const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 12px;
  max-width: 350px;
  filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
  background: #000000;
  color: #fff;
  @media (max-width: 992px) {
    margin: 0;
  }
`;
const EventCard = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 12px;
`;
const Poster = styled.img`
  width: 100%;
  /* height: 70vh; */
  width: 100%;
  max-height: 400px;
  margin: 0 auto;
  border-radius: 1.5rem;
  background: #000000;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Cardfooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  width: 100%;
  @media (max-width: ${phoneBreak}) {
    flex-direction: column;
  }
`;
const Stylespan1 = styled.span`
  font-family: "Midnight Minutes", sans-serif;
  font-size: 2em;
  /* padding: 0.2em 1em;
  margin: 10px 0; */
  @media (max-width: ${phoneBreak}) {
    font-size: 1.5em;
  }
`;
const Stylespan2 = styled.span`
  font-family: "Midnight Minutes", sans-serif;
  font-size: 1.5em;
  @media (max-width: ${phoneBreak}) {
    font-size: 1.2em;
  }
`;
const Stylespan3 = styled.span`
  text-decoration: underline;
  font-family: "Midnight Minutes", sans-serif;
  font-size: 1em;
  @media (max-width: ${phoneBreak}) {
    font-size: 0.8em;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  /* justify-content: flex-end;
    width: 70%; */
`;
const SpanDiv = styled(Link)`
  display: flex;
  justify-content: center;
  /* width: 30%; */
  color: white;
  flex: 1;
`;
const Button = styled.button`
  background: #ff0000;
  outline: none;
  border: none;
  mix-blend-mode: normal;
  box-shadow: 0px 6px 0px #44003d;
  border-radius: 20.5px;
  padding: 0.5em 1.5em;
  font-family: "nightOfTerror";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 29px;
  color: #000000;
  @media (max-width: ${phoneBreak}) {
    padding: 0.2em 1em;
    margin: 10px 0;
    font-size: 0.8rem;
  }
`;

const EventBox = ({ data, userAccess, getEvents, selectedClub }) => {
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const [registerLoading, setRegisterLoading] = useState(false);
  console.log(data);
  const navigate = useNavigate();
  const handleClick = () => {
    if(data.isPaid){

    }
    const user=localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))
    if (userAccess) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + userAccess.authToken);
      myHeaders.append("Content-Type", "application/json");
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      console.log(data);
      const formattedToday = dd + "/" + mm + "/" + yyyy;
      var raw = JSON.stringify({
        date: formattedToday,
        clubId: selectedClub.value,
        clubName: selectedClub.value,
        eventId: data["_id"],
        eventName: data.name,
      });
      console.log(raw);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      setRegisterLoading(true);
      fetch(prodURL + "/registration", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          setRegisterLoading(false);
          console.log(result);
          getEvents(selectedClub.value);
        })
        .catch((error) => {
          console.log("error", error);
          setRegisterLoading(false);
        });
    } else {
      navigate("/signin");
    }
  };
  return (
    <BackCard>
      <EventCard>
        <Poster loading="lazy" src={data.image} />
      </EventCard>
      <Details>
        <Stylespan1>{data.name}</Stylespan1>
        <Stylespan2>{data.date}</Stylespan2>
        <Stylespan2>{data.venue}</Stylespan2>
        <Cardfooter>
          <SpanDiv />
          <BtnDiv>
            <Button
              disabled={data.isRegistered || data.disabled}
              onClick={() => handleClick(data)}
            >
              {data.isRegistered ? "Registered" : "Register"}
            </Button>
          </BtnDiv>
          <SpanDiv>
            <Stylespan3>View details</Stylespan3>
          </SpanDiv>
        </Cardfooter>
      </Details>
      <Modal
        open={modal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        <PaymentPopUp />
        {/* </Box> */}
      </Modal>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={registerLoading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </BackCard>
  );
};

export default EventBox;
