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
  height: 100vh;
  width: 100%;
`;
const OuterEventPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 12px 8px;

  @media (min-width: 992px) {
    padding: 24px 64px;
  }
`;
const EventAndPre = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 100%;
  }
  @media (min-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    max-width: 100%;
  }
`;
const PleaseSelect = styled.div``;

function EventPage(props) {
  // const url = "https://sonabyss.herokuapp.com";
  const location = useLocation();

  const [userAccess, setUserAccess] = useState(null);
  const [Events, setEvents] = useState();
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  console.log(userAccess);

  const getEvents = (val) => {
    console.log("hi");
    var myHeaders = new Headers();
    let url = "";
    if (userAccess) {
      myHeaders.append("Authorization", "Bearer " + userAccess.authToken);
      url = prodURL + "/events/";
    } else {
      url = prodURL + "/events/noAuth/";
    }

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let clubId;
    if (location.state) {
      clubId = location.state.user.id;
    } else {
      clubId = val;
    }

    fetch(url +clubId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setEvents(result);
      })
      .catch((error) => console.log("error", error));
  };
  const getClubs = () => {
    var myHeaders = new Headers();
    if (userAccess) {
      myHeaders.append("Authorization", "Bearer " + userAccess.authToken);
    }

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(prodURL + "/clubs", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let tempClub = [];
        result.map((club) => {
          tempClub.push({
            label: club.name,
            value: club["_id"],
          });
          if (result.length !== 0 && !selectedClub) {
            getEvents(tempClub[0].value);
            setSelectedClub(tempClub[0]);
          }
        });
        setClubs(tempClub);
      })
      .catch((error) => console.log("error", error));
  };

  const getEventsById = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.authToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const clubId = location.pathname.split("/")[2];
    fetch(
      prodURL + "/registration/6324407faa284d2404190d16/" + clubId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // setEvents
      })
      .catch((error) => console.log("error", error));
  };
  // const getEventsById

  useEffect(() => {
    setUserAccess(user);
    if (location.state) {
      setSelectedClub(location.state.club["id"]);
      getEvents();
    }
    getClubs();
  }, [userAccess]);
  console.log(selectedClub);
  return (
    <Bckground>
      {/* <Topbar/> */}
      <OuterEventPage>
        <FilterSection
          clubs={clubs}
          selectedClub={selectedClub}
          setSelectedClub={setSelectedClub}
          getEvents={getEvents}
        />
        <EventAndPre>
          {selectedClub ? (
            Events ? (
              Events.map((data) => <EventBox data={data} userAccess={userAccess} />)
            ) : (
              <CircularProgress />
            )
          ) : (
            <PleaseSelect>Please Select Message</PleaseSelect>
          )}
        </EventAndPre>
      </OuterEventPage>
    </Bckground>
  );
}

export default EventPage;
