import React from 'react'
import styled from "styled-components";
import { useEffect, useState } from 'react'
import { prodURL } from "../../config"

const CentralContainer = styled.div`
    width: 100%;
    background-color: #241222;
    height: 100vh;
    padding: 0;
`

const SemiContainer = styled.div`
    position: relative;
    max-width: 1600px;
    background-color: #130912;
    margin: 0 auto;
    padding: 0 0 80px 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 850px) {
        width: 100%;
        overflow: hidden;
    } 
`

const ContentDiv = styled.div`
    border: 3px solid pink;
    width: 90%;
    min-height: 450px;
    height: 80%;
    margin: 0 auto;
    background: rgba(62, 28, 51, 0.38);
    display: flex;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
    border-radius: 30px;
    margin-top: 4%;
    position: relative;
    z-index: 3;
    padding: 30px;
    @media screen and (max-width: 850px) {
        width: 80%;
        display: block;
        /* padding-bottom: 40px; */
    }
`



const Div = styled.div`
   position: relative;

   img {
    border-radius: 30px;
    width: 90%;
    height: 90%;
   }
  
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    opacity: 0;
    transition: 0.5s ease-in-out;
  }
  

  &:hover{
    img {
        filter:blur(4px) brightness(20%);
    }
    .overlay{
        opacity: 1;
    }
  }

  .text {
    font-family: 'midnight';
    letter-spacing: 1.4px;
    color: #c20c18;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 47%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  @media screen and (max-width: 850px) {
    margin-bottom: 30px;
    border: 2px solid pink;
    text-align: center;

    img {
        border-radius: 30px;
        width: 80%;
        height: 80%;
    }

    .text {
        font-family: 'midnight';
        width: 70%;
        letter-spacing: 1.2px;
        font-size: 17px;
        top: 50%;
        left: 47%;
        transform: translate(-50%, -50%);
    }

}
`

function AllClubView() {

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

    return (
        <CentralContainer>
            <SemiContainer>
                <ContentDiv>
                    {
                        events.map(e => (
                            <Div >
                                {/* <Div> */}

                                <img src={e.image} className='image' />
                                <div className="overlay" >
                                    <div class="text">
                                        <p> <strong>{e.name} </strong> </p>
                                        <p>{e.desc}</p>
                                    </div>
                                </div>
                                {/* </Div> */}


                            </Div>
                        ))
                    }
                </ContentDiv>
            </SemiContainer>
        </CentralContainer>
    )
}

export default AllClubView