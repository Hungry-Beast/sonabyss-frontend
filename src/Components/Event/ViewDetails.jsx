import Topbar from '../Navs/Topbar'
import React from "react";
import styled from "styled-components";
import { imgUrl } from "../../config";


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
    height: 25%;
    min-width: 280px;
    padding: 9px;
    width: 25%;
    background-color: black;
    margin-left: 20px;
    border-radius: 16px;
    @media screen and (max-width: 1370px) {
        min-height: 310px;
        min-width: 250px;
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
    width: 90%;
    margin-left: 6%;
    @media screen and (max-width: 1370px) {
        margin-left: 2%;
    }
    @media screen and (max-width: 850px) {
        margin: 0 auto;
        margin-top: 15%
    }
`

const DetailName = styled.h2`
    color: white;
    font-family: 'midnight';
    font-size: 40px;
    font-weight: 700;
    margin-left: 20%;
    @media screen and (max-width: 490px) {
        font-size: 30px;
        margin-left: 15%;
    }
`

const DetailsCard = styled.div`
    height: 260px;
    max-width: 700px;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.72);
    margin-top: 30px;
    padding: 10px 30px 10px 30px;
    overflow-y: scroll;
    @media screen and (max-width: 850px) {
        width: 90%;
        min-height: 400px;
        margin: 0 auto;
        max-width: auto;
        padding-bottom: 50px;
    }
`

const SkeletonAndButton = styled.div`
    width: 240px;
    height: 350px;
    text-align: center;
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
                            <DetailName>Mortal Kombat 11</DetailName>
                            <DetailsCard>
                                <H2>DETAILS : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</H2>
                                <H3>PRE/MAIN EVENT : </H3>
                                <H3>DATE : </H3>
                                <H3>TIME : </H3>
                                <RegisterBtnDisabled>REGISTER</RegisterBtnDisabled>
                            </DetailsCard>
                        </DetailsHolder>
                        <SkeletonAndButton>
                            <SkeletonImg src={imgUrl + "/Group 3.svg"} />
                            <RegisterBtn>REGISTER</RegisterBtn>
                        </SkeletonAndButton>
                    </ContentDiv>

                </LowerHalf>
            </SemiContainer>
        </CentralContainer>

    );
};

export default ViewDetails;
