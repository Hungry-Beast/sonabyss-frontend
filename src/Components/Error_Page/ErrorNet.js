import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { imgUrl } from "../../config";




const Image = styled.img`

`;

const Heading = styled.h1`
  
`;


const NoInternetConnection = (props) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return props.children;
  } else {
    return (
      <div>
        <Heading>No Interner Connection. Please try again later.</Heading>
        <Image src={imgUrl + "/ErrorVideo.gif"} alt="Error Image" />
      </div>
    );
  }
};

export default NoInternetConnection;
