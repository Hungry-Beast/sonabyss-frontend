import React from "react";
import { useState,useEffect } from "react";
// import axios from "axios";
import { user } from "../../localStore";
import { prodURL } from "../../config";
import { useLocation } from "react-router-dom";

function EventPage(props) {
  const url = "https://sonabyss.herokuapp.com";
  const location=useLocation();
  const [Event, setEvent] = useState([]);
  // console.log()
  const getEvents = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.authToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const clubId=location.pathname.split('/')[2]
    fetch(
      prodURL+"/events/"+clubId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    // getEvents();
  }, []);

  return (
    <div>
      <h1>This is the EventPage</h1>
    </div>
  );
}

export default EventPage;
