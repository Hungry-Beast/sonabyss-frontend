import React from 'react'

import styled from "styled-components";

const BackCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    /* background-color: pink; */
    border-radius: 16px;
    padding-left: 12px;
    padding-right:12px;
    /* width: 481px; */
    height: 100%;
    max-width: 300px;
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
    background: #000000;
    color: #fff;
    `;
const EventCard = styled.div`
    align-items:center;
    justify-content: center;
    width: 100%;
    /* height: 182px; */
    object-fit: contain;
    /* background-color: white; */
    border-radius: 8px;
    margin-top: 12px;
    margin-bottom: 12px;
    
    `;
const Poster = styled.img`
    width: 100%;
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
    margin-bottom: 12px;

`;

const EventBox = ({data}) => {
    console.log(data)
  return (
    <BackCard>
        <EventCard>
            <Poster src={data.image} />
        </EventCard>
        <Details>
            <span>
            {data.name}
            </span>
            <span>
               {data.date}
            </span>
        </Details>
    </BackCard>
  )
}

export default EventBox