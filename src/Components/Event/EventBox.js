import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { prodURL } from "../../config";

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
`;
const Stylespan1 = styled.span`
  font-family: "midnight";
  font-size: 2em;
`;
const Stylespan2 = styled.span`
  font-family: "midnight";
  font-size: 1.5em;
`;
const Stylespan3 = styled.span`
  text-decoration: underline;
  font-family: "midnight";
  font-size: 1em;
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
`;

const EventBox = ({ data,userAccess }) => {
  console.log(data);
  const navigate=useNavigate();
  const handleClick = () => {
    if (userAccess) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + userAccess.token);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        date: "13-10-2000",
        clubId: "6322e56fb3ac64c6f9b87b6e",
        clubName: "kaddos",
        eventId: "6341c8059253bd24df89387d",
        eventName: "Pintu",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(prodURL+"/registration", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }else{
        navigate('/login')
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
          <BtnDiv onClick={handleClick(data)}>
            <Button>Register</Button>
          </BtnDiv>
          <SpanDiv>
            <Stylespan3>View details</Stylespan3>
          </SpanDiv>
        </Cardfooter>
      </Details>
    </BackCard>
  );
};

export default EventBox;
