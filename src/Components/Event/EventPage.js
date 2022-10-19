import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
// import { user } from "../../localStore";
import { imgUrl, prodURL } from "../../config";
import { useLocation } from "react-router-dom";
import Topbar from "../Navs/Topbar";
import FilterSection from "./FilterSection";
import EventBox from "./EventBox";
import { Backdrop, CircularProgress } from "@mui/material";
import styled from "@emotion/styled";
import { phoneBreak } from "../../breakPoints";
import "./Style.css";
import { Modal } from "@mui/material";
import PaymentPopUp from "./PaymentPopUp";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const EventTopbar = styled(Topbar)`
  @media (max-width: ${phoneBreak}) {
    display: none !important;
  }
`;

const Bckground = styled.div`
  min-height: 100vh;
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
const MainEventDiv = styled.div`
  /* width: 100vw !important; */
  display: block;
`;
const PreEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 2.5em;
  background-color: #000000;
  border: solid #ff0000;
  border-radius: 70px;
  color: white;
  margin: 3rem 0;
`;
const Pre = styled.span`
  font-size: 2em;
  font-family: "Midnight Minutes", sans-serif;
  max-width: 100%;
  @media (max-width: ${phoneBreak}) {
    font-size: 1.3em;
  }
`;
const Image=styled.img`
      width: 10rem;
      height:10rem;
`
function EventPage({ userAccess, setUserAccess }) {
  // const url = "https://sonabyss.herokuapp.com";
  const location = useLocation();

  // const [userAccess, setUserAccess] = useState(null);
  console.log(location);
  const [Events, setEvents] = useState();
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [eventLoading, setEventLoading] = useState(false);
  const [checked, setChecked] = useState(0);
  //console.log(userAccess);

  const getEvents = (val) => {
    //console.log("hi");
    var myHeaders = new Headers();
    let url = "";
    console.log(userAccess);
    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

    if (userAccess || user) {
      myHeaders.append("Authorization", "Bearer " + user.authToken);
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
    if (location.state && !checked) {
      clubId = location.state._id;
      setChecked(1);
    } else {
      clubId = val;
    }
    setEventLoading(true);
    fetch(url + clubId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        setEvents(result);
        setEventLoading(false);
      })
      .catch((error) => {
        setEventLoading(false);
        //console.log("error", error);
      });
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
        //console.log(result);
        let tempClub = [];
        result.map((club) => {
          tempClub.push({
            label: club.name,
            value: club["_id"],
          });
        });
        if (result.length !== 0 && !selectedClub) {
          getEvents(tempClub[0].value);
          setSelectedClub(tempClub[0]);
        }
        setClubs(tempClub);
      })
      .catch((error) => {
        //console.log("error", error)
      });
  };

  // const getEventsById = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", "Bearer " + user.authToken);

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   const clubId = location.pathname.split("/")[2];
  //   fetch(prodURL + "/events/" + clubId, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => //console.log(result))
  //     .catch((error) => //console.log("error", error));
  // };
  useEffect(() => {
    getClubs();
    if (location.state) {
      setSelectedClub(location.state._id);
      getEvents();
    }
  }, []);
  // ..............................................................

  // const [modal, setModal] = useState(true);

  // .................................................................
  return (
    <Bckground className="eventPage">
      <EventTopbar userAccess={userAccess} />
      <OuterEventPage>
        <FilterSection
          clubs={clubs}
          selectedClub={selectedClub}
          setSelectedClub={setSelectedClub}
          getEvents={getEvents}
        />
        <>
          {selectedClub ? (
            Events && Events.length !== 0 ? (
              <>
                <EventAndPre>
                  {Events[0]?.length &&
                    Events[0].map((data) => (
                      <EventBox
                        data={data}
                        getEvents={getEvents}
                        selectedClub={selectedClub}
                        userAccess={userAccess}
                        isMain={false}
                      />
                    ))}
                </EventAndPre>
                <PreEvent>
                  <Pre>Main Event</Pre>
                </PreEvent>
                <EventAndPre>
                  {Events[1]?.length &&
                    Events[1].map((data) => (
                      <EventBox
                        data={data}
                        getEvents={getEvents}
                        selectedClub={selectedClub}
                        userAccess={userAccess}
                        isMain={true}
                      />
                    ))}
                </EventAndPre>
              </>
            ) : (
              <CircularProgress />
            )
          ) : (
            [1, 2, 3, 4].map((arr) => (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton
                  variant="rectangular"
                  height={200}
                  sx={{ bgcolor: "grey.900" }}
                />
                <Skeleton sx={{ bgcolor: "grey.900" }} />
                <Skeleton width="60%" sx={{ bgcolor: "grey.900" }} />
              </Box>
            ))
          )}
        </>
      </OuterEventPage>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={eventLoading}
        // onClick={handleClose}
      >
        {/* <CircularProgress color="inherit" /> */}
        <Image src={imgUrl+"/ghostLoader.gif"}/>
      </Backdrop>
      {/* //........................................................................... */}
      {/* <Modal */}
      {/* open={modal}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title" */}
      {/* aria-describedby="modal-modal-description" */}
      {/* > */}
      {/* <Box sx={style}> */}
      {/* <PaymentPopUp /> */}
      {/* </Box> */}
      {/* </Modal> */}
      {/* ....................................................................................... */}
    </Bckground>
  );
}

export default EventPage;
