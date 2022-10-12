import React from 'react'

import styled from "styled-components";

const BackCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 12px;
    max-width: 100%;
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
    

`;
const Cardfooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    margin: 12px 0;
    width: 100%;
`;
const Stylespan1 = styled.span`
    font-family: Midnight Minutes;
    font-size: 2em;
`;
const Stylespan2 = styled.span`
    font-family: Midnight Minutes;
    font-size: 1.5em;
`;
const Stylespan3 = styled.span`
    text-decoration: underline;
    font-family: Midnight Minutes;
    font-size: 1em;
`;
const BtnDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 70%;
`;
const SpanDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 30%;
`;
const Button = styled.button`
    background: #FF0000;
    mix-blend-mode: normal;
    box-shadow: 0px 6px 0px #44003D;
    border-radius: 33.5px;
    padding: 0.5em 1.5em;
    font-family: 'CF Night of Terror PERSONAL';
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 29px;
    color: #000000;
`;
const handleClick = () => {
    
}

const EventBox = ({data}) => {
    console.log(data)
  return (
    <BackCard >
        <EventCard>
            <Poster loading="lazy" src={data.image} />
        </EventCard>
        <Details>
            <Stylespan1>
             {data.name}
            </Stylespan1>
            <Stylespan2>
               {data.date}
            </Stylespan2>
            <Cardfooter>
                <BtnDiv onClick={handleClick}>
                    <Button>Register</Button>
                </BtnDiv>
                <SpanDiv>
                    <Stylespan3>View details</Stylespan3>
                </SpanDiv>
            </Cardfooter>
        </Details>
    </BackCard>
  )
}

export default EventBox