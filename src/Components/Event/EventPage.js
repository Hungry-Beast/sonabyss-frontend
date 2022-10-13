import React from "react";
import { useState, useEffect } from "react";
import { user } from "../../localStore";
import { prodURL } from "../../config";
import { useLocation } from "react-router-dom";
import Topbar from "../Navs/Topbar";
import FilterSection from "./FilterSection";
import EventBox from "./EventBox";
import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

const Bckground = styled.div`
  height:100vh;
`;
const OuterEventPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 12px 8px;

  @media(min-width: 992px) {
    padding: 24px 64px;
    
  }
  

`;
const EventAndPre = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    max-width: 100%;
  }
  @media(min-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 3rem;
    max-width: 100%;
  }
`;


function EventPage(props) {
  const url = "https://sonabyss.herokuapp.com";
  const location = useLocation();
  const [Events, setEvents] = useState([
   
    
  ]);
  // console.log()
  const getEvents = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.authToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const clubId = location.pathname.split("/")[2];
    fetch(prodURL + "/events/" + clubId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };
  // getEventsById

  useEffect(() => {
    getEvents();
    setEvents([
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
      {
        "name": "Solo Dance",
        "date": "26-10-2022",
        "time": "12:00",
        "club": "63241cd01517958fb627cd3f",
        "clubName": "Hobby",
        "image": "https://firebasestorage.googleapis.com/v0/b/sonabyss-48665.appspot.com/o/WhatsApp%20Image%202022-10-09%20at%2011.53.16%20PM.jpeg?alt=media&token=b332a40f-ccfb-415d-bd63-ea6553ce5298",
        "desc": "rnjrjrjrjrj",
        "user": [],
        "isOpen": true,
        "createdBy": "633fedf0d523113e1ebf2dbc",
        "isPaid": true,
        "price": "10",
        "_id": "6343126e480d5d47e12c4a65",
        "createdAt": "2022-10-09T18:26:54.849Z",
        "updatedAt": "2022-10-09T18:26:54.849Z",
        "__v": 0
    },
    ])
  }, []);

  return (
    <Bckground>
    {/* <Topbar/> */}
      <OuterEventPage>
        <FilterSection/>
        <EventAndPre>
            {Events ? (
              Events.map((data) => <EventBox data={data} />)
            ) : (
              <CircularProgress />
            )}
        </EventAndPre>
      </OuterEventPage>

    </Bckground>
  );
}

export default EventPage;
