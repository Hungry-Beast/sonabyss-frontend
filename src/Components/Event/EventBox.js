import React from 'react'

import styled from "styled-components";

const BackCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 16px;
    padding-left: 12px;
    padding-right:12px;
    /* margin: 12px; */
    max-width: 300px;
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
    background: #000000;
    color: #fff;
    @media(max-width: 992px) {
    margin: 0;
  }
    `;
const EventCard = styled.div`
    align-items:center;
    justify-content: center;
    width: 100%;
    object-fit: contain;
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
const Stylespan1 = styled.span`
    font-family: Midnight Minutes;
    font-size: 2em;
`;
const Stylespan2 = styled.span`
    font-family: Midnight Minutes;
    font-size: 1.5em;
`;

const EventBox = ({data}) => {
    console.log(data)
  return (
    <BackCard>
        <EventCard>
            <Poster src={data.image} />
        </EventCard>
        <Details>
            <Stylespan1>
             {data.name}
            </Stylespan1>
            <Stylespan2>
               {data.date}
            </Stylespan2>
        </Details>
    </BackCard>
  )
}

export default EventBox