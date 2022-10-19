import styled from 'styled-components';

export const CentralContainer = styled.div`
    background: #130912;
    width: 100%;
`

export const Heading = styled.div`
    font-size: 58px;
    font-family: "unutterable";
    opacity: 1;
    position: relative;
    z-index: 3;
    padding-bottom: 10px;
`

export const ViewAllButton = styled.button`
    font-family: "unutterable";
    padding: 10px 45px;
    border-radius: 30px;
    background: #FF461F;
    border: transparent;
    font-size: 23px;
    margin: 3vh 5.5% 0 0;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25), 4.2px 3.5px 3px 3px #ff1b12;
    @media screen and (max-width: 650px) {
        margin: 4vh 5% 0 0;
    }
`

/* Clubs Section end */
/* About Section Start */

export const Container = styled.div`
    width: 100%;
    color: white;
    margin: 0 auto;
    padding: 60px 0;
    margin-bottom: 60px;
`

export const AboutDiv = styled.div`
    width: 95%;
    padding: 80px 20px 0px 20px;
    margin: 0 auto;
    position: relative;
    border-radius: 50px;
    text-align: center;
    min-height: 600px;
    opacity: 1;
    @media screen and (max-width: 650px) {
        width: 100%;
        padding: 80px 0px 0px 0px;
    }

    &::after {
    content: '';
    width: 108%;
    height: 108%;
    position: absolute;
    top: 0;
    left: -4%;
    filter: blur(30px);
    border-radius: 50px;
    background: #3e1c33c2;
}
`

export const AboutDivContent = styled.div`
    position: relative;
    z-index: 2;
    height: 90%;
    width: 100%;
    text-align: center;
    
`

export const AboutText = styled.div`
    width: 92%;
    background: rgba(22, 10, 19, 0.7);
    font-size: 26px;
    margin: 0 auto;
    font-family: "unutterable";
    letter-spacing: 1.2px;
    padding: 30px 10% 30px 10%;
    line-height: 28px;
    border-radius: 50px;
    font-weight: 400;
    /* margin-top: -30px; */
    @media screen and (max-width: 650px) {
        padding: 40px 20px 50px 20px;
        line-height: 25px;
        border-radius: 0;
        font-size: 18px;
        width: 100%;
    }
`

export const ImageContainer = styled.div`
    height: 130%;
    width: 100%;
    max-height: 1000px;
    max-width: 1150px;
    position: absolute;
    top: 32%; right: 50%;
    mix-blend-mode: color-dodge;
    z-index: -1;
    transform: translate(50%,-50%);
    @media screen and (max-width: 650px) {
        width: 180%;
        max-height: 460px;
        left: -40%;
        top: 0;
        transform: translate(0,0);
    }

`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0.6;
    mix-blend-mode: color-dodge;
`

/* About Section end */
/* Sponsors Section Start */

export const SponserImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`
export const ExtraMarqueeImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    display: none;
    @media screen and (max-width: 650px) {
        display: inline;
    }
`


export const SponserImgCont = styled.div`
    height: 170px;
    width: 170px;
    position: relative;
    border-radius: 50%;
    flex-shrink: 0;
    &::after{
        content: '';
        height: 101%;
        width: 101%;
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: 5;
        border-radius: 50%;
        box-shadow: inset 0px 0px 11px 10px rgb(0 0 0 / 90%);
    }

`
export const ExtraMarqueeImgCont = styled.div`
    height: 170px;
    width: 170px;
    position: relative;
    border-radius: 50%;
    flex-shrink: 0;
    display: none;
    &::after{
        content: '';
        height: 101%;
        width: 101%;
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: 5;
        border-radius: 50%;
        box-shadow: inset 0px 0px 11px 10px rgb(0 0 0 / 90%);
    }
    @media screen and (max-width: 650px) {
        display: block;
    }
`

export const SponserImgMainContainer = styled.div`
    width: 92%;
    height: 450px;
    position: relative;
    background: rgba(22, 10, 19, 0.7);
    margin: 0 auto;
    padding: 20px 10%;
    overflow: hidden;
    border-radius: 50px;
    @media screen and (max-width: 650px) {
        border-radius: 0;
        width: 100%;
    } 
`

export const SponserHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 650px) {
        width: 780px;
        border-radius: 0;
        gap: 30px;
        animation: scrolling 4s linear infinite;
    }

    @keyframes scrolling {
        0% {left:780px;}
        100% {left: -810px;}
  }
`

/* Sponsors Section end */
/* Footer Section Start */

export const HR = styled.hr`
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
    margin: 0 auto;
    width: 1220px; 
`

export const Footer = styled.div`
    height: 100px;
    display : flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: #170b16;
    margin: 0 auto;
`
export const IconContainers = styled.div`
    display: flex;
    margin-left: 3%;
`

export const TextContainer = styled.div`
    margin-right: 8%;
`

export const Dummy = styled.div`
    @media screen and (max-width: 650px) {display: none;}
`

export const InstaIcon = styled.img`
    mix-blend-mode: color-dodge;
    margin-left: 20px;
    width: 65px;
    height: 60px;
    @media screen and (max-width: 650px) {
        height: 45px;
        width: 50px;
        margin-left: 5px;
    }
`

export const SonabyssIcon = styled.img`
    height: 40px;
    margin: 10px 0 -18px 0;
    @media screen and (max-width: 650px) {
        height: 32px;
        width: 110px;
    }
`

export const FooterText = styled.p`
    margin-left: -10px;
    font-family: "nightOfTerror";
    color: white;
    font-size: 13px;
    @media screen and (max-width: 650px) {
        font-size: 12px;
    }
`