import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./DesktopSlider.css";
import parse from 'html-react-parser';
// import required modules
import { EffectCoverflow, Pagination, Navigation, EffectCards } from "swiper";
import { prodURL } from "../../../config";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Div = styled(SwiperSlide)`
/* position: relative !important; */
/* width:50%; */
img {
    object-fit: cover;
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

    /* background-color: #008cba; */
  }
  

  &:hover{
    img {
    filter:blur(4px) brightness(35%);
  }
  .overlay{
    opacity: 1;
  }
  }
  
  .text {
    font-family: 'midnight';
    letter-spacing: 0.09em;
    color: rgb(255,18,33);
    font-size: 1.3rem;
    position: absolute;
    top: 50%;
    left: 39%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  

`

export default function Slider({setClubLoaded}) {
    const [events, setEvents] = useState([])

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    useEffect(() => {
        fetch(`${prodURL}/clubs`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setEvents(result.reverse())
            })
            .catch(error => console.log('error', error));


    }, [])
    // const [ref, setfirst] = useState(second)
    const navigate = useNavigate();
    return (
        <div className="desktop-slider" >
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={{ type: "fraction" }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                navigation={true}
                className="mySwiper"
            >
                {
                    events.map(e => {
                        return (
                            <Div onClick={() => navigate('/events', { state: e })} >
                                {/* <Div> */}

                                <img src={e.image} className='image' onLoad={()=>setClubLoaded(true)} />
                                <div className="overlay" >
                                    <div class="text">
                                        <p> <strong>{e.name} </strong> </p>
                                        <p>{e.desc}</p>
                                    </div>
                                </div>
                                {/* </Div> */}


                            </Div>
                        )
                    })
                }

                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}
            </Swiper>

        </div>
    );
}
