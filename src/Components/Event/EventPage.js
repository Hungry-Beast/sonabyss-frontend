import React from "react";
import { useState, useEffect } from "react";
import { user } from "../../localStore";
import { prodURL } from "../../config";
import { useLocation } from "react-router-dom";
// import Topbar from "../Navs/Topbar";
import FilterSection from "./FilterSection";
import EventBox from "./EventBox";
import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

const Bckground = styled.div`
  background-color: #130912;
  height:100vh;
  /* color: #fff; */
`;
const EventAndPre = styled.div`
  padding: 0 24px 0 24px;
`;
const PreEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PreEventBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 120px;
  height: 25px;
  border-radius: 3px;
  background-color: #ffffff;
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
    ])
  }, []);

  return (
    <Bckground>
      <FilterSection/>
      <EventAndPre>
        <PreEvent>
          <PreEventBox>PreEvent</PreEventBox>
        </PreEvent>
        {/* <EventBox> */}
          {Events ? (
            Events.map((data) => <EventBox data={data} />)
          ) : (
            <CircularProgress />
          )}
        {/* </EventBox> */}
        <h1>This is the EventPage</h1>
      </EventAndPre>

    </Bckground>
  );
}

export default EventPage;
