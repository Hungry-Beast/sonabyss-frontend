import Topbar from '../Navs/Topbar'
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { imgUrl } from "../../config";
import { useLocation } from "react-router-dom";

const CentralContainer = styled.div`
    width: 100%;
    background-color: #241222;
    height: 100vh;
`

const SemiContainer = styled.div`
    position: relative;
    max-width: 1600px;
    background-color: #130912;
    margin: 0 auto;
    padding: 0 0 80px 0;
    @media screen and (max-width: 850px) {
        width: 100%;
        overflow: hidden;
    } 
`

const BackIcon = styled.img`
    height: 50px;
    width: 50px;
    display: none;
    margin: 30px 0 0 15px;
    @media screen and (max-width: 850px) {
        display: inline;
    }
`

// const ClubsBtn = styled.a`
//     padding: 10px 45px;
//     color: white;
//     border-radius: 30px;
//     text-decoration: none;
//     border: 3.2px solid red;
//     position: absolute;
//     font-size: 21px;
//     top: 68%;
// `
export const ImageContainer = styled.div`
    height: 130%;
    width: 100%;
    max-height: 1000px;
    max-width: 1150px;
    position: absolute;
    top: 32%; right: 50%;
    mix-blend-mode: color-dodge;
    z-index: 2;
    transform: translate(50%,-50%);
    @media screen and (max-width: 850px) {
        width: 190%;
        height: 120%;
        max-height: 600px;
        top: 40%;
    }
    @media screen and (max-width: 480px) {

        top: 45%;
    }
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0.6;
    mix-blend-mode: color-dodge;
`

const LowerHalf = styled.div`
    width: 100%;
    position: relative;
`
const ContentDiv = styled.div`
    border: 3px solid pink;
    width: 92%;
    min-height: 450px;
    height: 140%;
    margin: 0 auto;
    background: rgba(62, 28, 51, 0.38);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    margin-top: 30px;
    position: relative;
    z-index: 3;
    @media screen and (max-width: 850px) {
        width: 90%;
        display: block;
        padding-bottom: 40px;
    }
`
const NameCard = styled.div`
    min-height: 340px;
    height: 21%;
    min-width: 280px;
    padding: 9px;
    width: 21%;
    background-color: black;
    margin-left: 20px;
    border-radius: 16px;
    @media screen and (max-width: 1370px) {
        min-height: 330px;
        min-width: 270px;
    }
    @media screen and (max-width: 850px) {
        min-width: 0;
        min-height: 0;
        width: 60%;
        height: 25%;
        margin: 0 auto;
        margin-top : 30px;
    }
`
const NameCardImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 16px;
`

const DetailsHolder = styled.div`
    width: 85%;
    margin-left: 6%;
    height: 100%;
    @media screen and (max-width: 850px) {
        margin: 0 auto;
        margin-top: 15%
    }
`
const DetailText = styled.div`
    display: flex;
    margin: 0 0 20px 10px;
    gap: 10%;
    @media screen and (max-width: 850px) {
        display: block;
        text-align: center;
        margin: 0 10% 0 0;
    }
`
const DetailName = styled.h2`
    color: white;
    font-family: 'midnight';
    font-size: 27px;
    font-weight: 700;
    /* margin-left: 10%; */
    @media screen and (max-width: 850px) {
        font-size: 25px;
        margin-left: 10%;
    }
`

const DetailsCard = styled.div`
    max-height: 260px;
    width: 90%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.72);
    padding: 10px 30px 10px 30px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }

    @media screen and (max-width: 850px) {
        width: 100%;
        min-height: 400px;
        margin: 0 auto;
        max-width: auto;
        padding-bottom: 50px;
    }
`

const SkeletonAndButton = styled.div`
    max-width: 200px;
    width: 20%;
    height: 100%;
    text-align: center;
    margin: 7% 5px 0 0;
    @media screen and (max-width: 1288px) {
        width: 180px;
        height: 280px;
    }
    @media screen and (max-width: 850px) {
        display: none;
    }
`

const SkeletonImg = styled.img`
    width: 100%;
    height: 76%;
    margin-bottom: -20px;
`
const RegisterBtn = styled.button`
    padding: 10px 25px;
    background: #FF0000;
    box-shadow: 0px 6px 0px #44003D;
    border-radius : 50px;
    border: transparent;
    font-weight: 800;
`

const RegisterBtnDisabled = styled.div`
    display: none;
    padding: 10px 25px;
    background: #FF461F;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25), 4.2px 3.5px 3px 3px #ff1b12;
    border-radius : 50px;
    border: transparent;
    font-weight: 800;
    @media screen and (max-width: 850px) {
        display: inline;
        margin: 0 0 30px 28%;
    }
`

const H2 = styled.h2`
    color: white;
    font-weight: 300;
`

const H3 = styled.h3`
    color: white;
    font-weight: 300;
`

const ViewDetails = () => {
    const location = useLocation();
    console.log(location.pathname.split('/'));
    const tempUrl = location.pathname.split('/')[2];
    const [details, setDetails] = useState()

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0OTE2YjE1YWU3OWI4ZDMzYjU2YTM3In0sImlhdCI6MTY2NTczNDQ2OX0.Fj74lVJU-CHmrL_f1clWHdjxtbgXBBS_VXA-_p1tohs");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://179.61.188.237/events/event/${tempUrl}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    })

    return (
        <CentralContainer>
            <SemiContainer>
                <BackIcon src={imgUrl + "/backarrow.svg"} />
                <Topbar />
                <LowerHalf>
                    <ImageContainer>
                        <Image src={imgUrl + "/Homepage.png"} />
                    </ImageContainer>
                    <ContentDiv>
                        <NameCard>
                            <NameCardImg src={imgUrl + "/MK.png"} />
                        </NameCard>
                        <DetailsHolder>
                            <DetailText>
                                <DetailName>Mortal Kombat 11</DetailName>
                                <DetailName>Payment Status : </DetailName>
                            </DetailText>

                            <DetailsCard>
                                <H2>PRE/MAIN EVENT : </H2>
                                <H3>DETAILS : Lorem Ipsum is Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum has been t</H3>

                                <H3>DATE : </H3>
                                <H3>TIME : </H3>
                                <RegisterBtnDisabled>REGISTER</RegisterBtnDisabled>
                            </DetailsCard>
                        </DetailsHolder>
                        <SkeletonAndButton>
                            <SkeletonImg src={imgUrl + "/Group 3.svg"} />
                            {/* <h1>Payment Status : </h1> <br /> */}
                            <RegisterBtn>REGISTER</RegisterBtn>
                        </SkeletonAndButton>
                    </ContentDiv>

                </LowerHalf>
            </SemiContainer>
        </CentralContainer>

    );
};

export default ViewDetails;
