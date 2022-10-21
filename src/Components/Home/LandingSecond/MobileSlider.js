import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "./MobileSlider.css";
import { EffectCards } from "swiper";
import { prodURL } from "../../../config";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Slider({ setClubLoaded }) {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    fetch(`${prodURL}/clubs`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        setEvents(result.reverse());
      })
      .catch((error) => console.log("error", error));
  }, []);

  const Div = styled(SwiperSlide)`
    /* position: relative !important; */
    /* width:50%; */

    /* position: relative; */
    @media (max-width: 650px) {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease-in-out;
      }

      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        /* width: 100%; */
        opacity: 0;
        transition: 0.5s ease-in-out;
      }

      &:hover {
        img {
          filter: blur(4px) brightness(50%);
        }
        .overlay {
          opacity: 1;
        }
      }
      &:focus {
        img {
          filter: blur(4px) brightness(50%);
        }
        .overlay {
          opacity: 1;
        }
      }

      .text {
        font-family: "livingbynumbers";
        letter-spacing: 0.05em;
        font-weight: bold;
        color: #eba000;
        font-size: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
      }
    }
  `;

  return (
    <div className="mobile-slider">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {events.map((e) => {
          return (
            <Div onClick={() => navigate("/events", { state: e })}>
              <img
                src={e.image}
                className="image"
                onLoad={() => setClubLoaded(true)}
              />
              <div className="overlay">
                <div class="text">
                  <p>
                    {" "}
                    <strong>{e.name} </strong>{" "}
                  </p>
                  <p>{e.desc}</p>
                </div>
              </div>
            </Div>
          );
        })}
      </Swiper>
    </div>
  );
}
