import styled from 'styled-components';

export const CentralContainer = styled.div`
    background: #130912;
    width: 100%;
`

export const Heading = styled.div`
    font-size: 40px;
    font-family: 'Jolly Lodger';
`

export const ViewAllButton = styled.button`
    padding: 10px 22px;
    border-radius: 30px;
    background: #FF461F;
    border: transparent;
    font-size: 16px;
    margin-top: 20px;
`

/* Clubs Section end */
/* About Section Start */

export const Container = styled.div`
    width: 1220px;
    color: white;
    margin: 0 auto;
    padding: 60px 0;
`

export const AboutDiv = styled.div`
    width: 95%;
    padding: 80px 20px 0px 20px;
    margin: 0 auto;
    position: relative;
    border-radius: 50px;
    text-align: center;
    height: 550px;

    &::after {
    content: '';
    width: 108%;
    height: 108%;
    position: absolute;
    top: 0;
    left: -10px;
    filter: blur(35px);
    border-radius: 50px;
    background: #3e1c33ac;
}
`

export const AboutDivContent = styled.div`
    position: relative;
    z-index: 2;
    height: 90%;
`

export const AboutText = styled.div`
    width: 85%;
    height: 400px;
    position: relative;
    background: rgba(22, 10, 19, 0.7);
    font-size: 32px;
    margin: 0 auto;
    font-family: 'Jolly Lodger';
    letter-spacing: 1px;
    padding: 20px 10%;
    line-height: 32px;
    border-radius: 50px;
`

export const ImageContainer = styled.div`
    height: 650px;
    width: 1000px;
    position: absolute;
    left: 10%;
    top: -25%;

`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0.8;
    mix-blend-mode: color-dodge;
`

/* About Section end */
/* Sponsors Section Start */

export const SponserImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`

export const SponserImgCont = styled.div`
    height: 170px;
    width: 170px;
    position: relative;
    border-radius: 50%;
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

export const SponserImgMainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 400px;
    position: relative;
    background: rgba(22, 10, 19, 0.7);
    margin: 0 auto;
    padding: 20px 10%;
    border-radius: 50px;
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
    /* border: 2px solid black; */
    display : flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background-color: #170b16;
    width: 1220px;
    margin: 0 auto;
`

export const InstaIcon = styled.img`
    mix-blend-mode: color-dodge;
    position: absolute;
    width: 70px;
    height: 65px;
    top: 10px;
    left: 150px;
`

export const SonabyssIcon = styled.img`
    position: absolute;
    top: 23px;
    left: 40%;
    height: 40px;
`

export const FooterText = styled.p`
    position: absolute;
    top: 60px;
    left: 39%;
    color: white;
    z-index: 6;
    font-size: 13px;
`