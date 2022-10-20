import React, { useState, useEffect } from "react";
import MobileSlider from "./MobileSlider";
import DesktopSlider from "./DesktopSlider";
import { imgUrl } from "../../../config";
import { Backdrop } from "@mui/material";

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 650;
};

export default function Slider({ clubLoaded, setClubLoaded }) {
  const isMobile = useCheckMobileScreen();
  // const [clubLoaded, setClubLoaded] = useState(false);
  return (
    <>
      {isMobile ? (
        <MobileSlider setClubLoaded={setClubLoaded} />
      ) : (
        <DesktopSlider setClubLoaded={setClubLoaded} />
      )}
      
    </>
  );
}
