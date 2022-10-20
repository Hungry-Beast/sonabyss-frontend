import {
  CentralContainer,
  ViewAllButton,
  Image,
  ImageContainer,
  Container,
  AboutDiv,
  AboutDivContent,
  AboutText,
  SponserImg,
  SponserImgCont,
  SponserImgMainContainer,
  Heading,
  Footer,
  LogoDiv,
  InstaIcon,
  SonabyssIcon,
  FooterText,
  HR,
  ExtraMarqueeImg,
  ExtraMarqueeImgCont,
  SponserHolder,
  IconContainers,
  TextContainers,
  TextContainer,
  Dummy,
  IconCont,
  AboutUs,
  ContactUs,
  SponserName,
} from "./Styles/Home.styles";
import Slider from "./Slider";
import { imgUrl } from "../../../config";
import { Link, Navigate } from "react-router-dom";
import Youtube from "../Landing/Youtube";

function Bottom({ clubLoaded, setClubLoaded }) {
  // Navigate('/route',{state:{club}})
  return (
    <>
      <Container>
        <AboutDiv>
          <AboutDivContent>
            <ImageContainer>
              {/* <Image src={back} /> */}
              <Image src={imgUrl + "/Homepage.png"} />
            </ImageContainer>
            <Youtube />
          </AboutDivContent>
        </AboutDiv>
      </Container>

      <CentralContainer>
        {/*-------------------------------------------------------------- Clubs ----------------------------------------------------- */}
        <Container>
          <AboutDiv>
            <Heading>Clubs</Heading>
            <AboutDivContent>
              <ImageContainer>
                {/* <Image src={back} /> */}
                <Image src={imgUrl + "/Homepage.png"} />
              </ImageContainer>

              <Slider  clubLoaded={clubLoaded} setClubLoaded={setClubLoaded}/>
              {/* <ViewAllButton>View All</ViewAllButton> */}
            </AboutDivContent>
          </AboutDiv>
        </Container>

        {/*-------------------------------------------------------------- About ----------------------------------------------------- */}

        <Container>
          <AboutDiv>
            <Heading>About</Heading>
            <AboutDivContent>
              <ImageContainer>
                <Image src={imgUrl + "/Homepage.png"} />
              </ImageContainer>
              <AboutText>
                <strong>SONABYSS '22</strong> <br />
                <strong>EMBRACE YOUR FEARS </strong> <br /> <br />
                Ed: 35 <br /> <br />
                Sonabyss is the yearly cultural fiesta organised by the
                Recreational And Cultural Activity Forum (RACAF) Committee of
                NERIST. Orchestrated over a span of three days, it's the time of
                the year when students from the institute and beyond showcase
                their talents in various events. It is one of the biggest
                cultural fest of North East India. <br />
                <br /> This year, we present to you this spook-tacular 35th
                edition of Sonabyss, "Sonabyss 2022- Embrace Your Fears" —where
                talents lurking in the basements come out of the shadows, where
                we raise our cauldrons high and cheer this ritual with enchanted
                enthusiasm, it is the annual parade where we conclude the year
                with ecstasy dancing on the jingle of joy and truly embody the
                spectre spirit of youth. It is more than a fest, it is more than
                a feat where we learn the magic within ourselves— it is a
                custom, a conclusion, a craft of creation.
                <br /> <br /> So come cast a spell this carnival, come hex it
                with your charisma; let the magic posess and pierce, come join
                us and truly—embrace your fears.
              </AboutText>
            </AboutDivContent>
          </AboutDiv>
        </Container>

        {/*-------------------------------------------------------------- Sponser----------------------------------------------------- */}
        <Container>
          <AboutDiv>
            <Heading>Organizers</Heading>
            <AboutDivContent>
              <ImageContainer>
                <Image src={imgUrl + "/Homepage.png"} />
              </ImageContainer>

              <SponserImgMainContainer>
                <SponserHolder>
                  <SponserImgCont>
                    <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
                    <SponserName>Sponser</SponserName>
                  </SponserImgCont>
                  <SponserImgCont>
                    <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
                    <SponserName>Sponser</SponserName>
                  </SponserImgCont>
                  <SponserImgCont>
                    <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
                    <SponserName>Sponser</SponserName>
                  </SponserImgCont>
                  <SponserImgCont>
                    <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
                    <SponserName>Sponser</SponserName>
                  </SponserImgCont>
                </SponserHolder>
              </SponserImgMainContainer>
            </AboutDivContent>
          </AboutDiv>
        </Container>

        <HR />

        <Footer>
          //{" "}
          <IconContainers>
            //{" "}
            <IconCont
              href="https://instagram.com/sonabyss2k22?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <InstaIcon src={imgUrl + "/insta-logo.svg"} />
            </IconCont>
            //{" "}
            <IconCont
              href="https://www.youtube.com/channel/UCyStvq5i-MhAUAzivfBpvhQ"
              target="_blank"
            >
              <InstaIcon src={imgUrl + "/youtube-logo.svg"} />
            </IconCont>
            //{" "}
          </IconContainers>
          //{" "}
          <TextContainer>
            // <SonabyssIcon src={imgUrl + "/sonabyss-logo.png"} />
            //{" "}
            <FooterText>
              {" "}
              <AboutUs>ABOUT US</AboutUs> &nbsp; &nbsp;|&nbsp; &nbsp;{" "}
              <ContactUs href="mailto:Official@sonabyss2k22.com">
                CONTACT US
              </ContactUs>{" "}
            </FooterText>
            //{" "}
          </TextContainer>
          // <Dummy></Dummy>
          //{" "}
        </Footer>
      </CentralContainer>
    </>
  );
}
export default Bottom;

// import { useEffect, useState } from 'react'
// import { CentralContainer, ViewAllButton, Image, ImageContainer, Container, AboutDiv, AboutDivContent, AboutText, SponserImg, SponserImgCont, SponserImgMainContainer, Heading, Footer, LogoDiv, InstaIcon, SonabyssIcon, FooterText, HR, ExtraMarqueeImg, ExtraMarqueeImgCont, SponserHolder, IconContainers, TextContainers, TextContainer, Dummy, IconCont, AboutUs, ContactUs, SponserName } from './Styles/Home.styles'
// import Slider from './Slider'
// import { imgUrl } from '../../../config'
// import { prodURL } from "../../../config"
// import styled from 'styled-components';
// import { useNavigate } from "react-router-dom";

// function Bottom() {
//     // const [showClubs, setShowClubs] = useState(true);
//     const navigate = useNavigate();
//     return (
//         <>
//             <CentralContainer>

//                 {/*-------------------------------------------------------------- Clubs ----------------------------------------------------- */}
//                 <Container>
//                     <AboutDiv>
//                         <Heading>Clubs</Heading>
//                         <AboutDivContent>

//                             <ImageContainer>
//                                 {/* <Image src={back} /> */}
//                                 <Image src={imgUrl + "/Homepage.png"} />
//                             </ImageContainer>

//                             <Slider />

//                             <ViewAllButton onClick={() => navigate("/allclubs")} >View All</ViewAllButton>
//                         </AboutDivContent>
//                     </AboutDiv>

//                 </Container>

//                 {/*-------------------------------------------------------------- About ----------------------------------------------------- */}

// <Container>
//     <AboutDiv>
//         <Heading>About</Heading>
//         <AboutDivContent>

//             <ImageContainer>
//                 <Image src={imgUrl + "/Homepage.png"} />
//             </ImageContainer>
//             <AboutText>
//                 <strong>SONABYSS '22</strong>   <br />
//                 <strong>EMBRACE YOUR FEARS </strong>  <br /> <br />
//                 Ed: 35 <br /> <br />
//                 Sonabyss is the yearly cultural fiesta organised by the Recreational And Cultural Activity Forum (RACAF) Committee of NERIST. Orchestrated over a span of three days, it's the time of the year when students from the institute and beyond showcase their talents in various events. It is one of the biggest cultural fest of North East India. <br />
//                 <br /> This year, we present to you this spook-tacular 35th edition of Sonabyss,
//                 "Sonabyss 2022- Embrace Your Fears" —where talents lurking in the basements come out of the shadows, where we raise our cauldrons high and cheer this ritual with enchanted enthusiasm, it is the annual parade where we conclude the year with ecstasy dancing on the jingle of joy and truly embody the spectre spirit of youth. It is more than a fest, it is more than a feat where we learn the magic within ourselves— it is a custom, a conclusion, a craft of creation.
//                 <br /> <br /> So come cast a spell this carnival, come hex it with your charisma; let the magic posess and pierce, come join us and truly—embrace your fears.
//             </AboutText>
//         </AboutDivContent>

//     </AboutDiv>
// </Container>

//                 {/*-------------------------------------------------------------- Sponser----------------------------------------------------- */}
//                 <Container>
//                     <AboutDiv>
//                         <Heading>Sponsers</Heading>
//                         <AboutDivContent>

//                             <ImageContainer>
//                                 <Image src={imgUrl + "/Homepage.png"} />
//                             </ImageContainer>

//                             <SponserImgMainContainer>
//                                 <SponserHolder>
//                                     <SponserImgCont>
//                                         <SponserImg src={imgUrl + "/cat.png"} />
//                                     </SponserImgCont>
//                                     <SponserImgCont>
//                                         <SponserImg src={imgUrl + "/cat.png"} />
//                                     </SponserImgCont>
//                                     <SponserImgCont>
//                                         <SponserImg src={imgUrl + "/cat.png"} />
//                                     </SponserImgCont>
//                                 </SponserHolder>
//                             </SponserImgMainContainer>

//                         </AboutDivContent>

//                     </AboutDiv>
//                 </Container>

//                 {/*-------------------------------------------------------------- Organizer ----------------------------------------------------- */}

// <Container>
//     <AboutDiv>
//         <Heading>Organizers</Heading>
//         <AboutDivContent>

//             <ImageContainer>
//                 <Image src={imgUrl + "/Homepage.png"} />
//             </ImageContainer>

//             <SponserImgMainContainer>
//                 <SponserHolder>
//                     <SponserImgCont>
//                         <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
//                         <SponserName>Sponser</SponserName>
//                     </SponserImgCont>
//                     <SponserImgCont>
//                         <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
//                         <SponserName>Sponser</SponserName>
//                     </SponserImgCont>
//                     <SponserImgCont>
//                         <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
//                         <SponserName>Sponser</SponserName>
//                     </SponserImgCont>
//                     <SponserImgCont>
//                         <SponserImg src={imgUrl + "/MadangPulo.jpg"} />
//                         <SponserName>Sponser</SponserName>
//                     </SponserImgCont>

//                 </SponserHolder>
//             </SponserImgMainContainer>

//         </AboutDivContent>

//     </AboutDiv>
// </Container>

//                 {/*-------------------------------------------------------------- Footer ----------------------------------------------------- */}

//                 <HR />

                // <Footer>
                //     <IconContainers>
                //         <IconCont href="https://instagram.com/sonabyss2k22?igshid=YmMyMTA2M2Y=" target="_blank" ><InstaIcon src={imgUrl + "/insta-logo.svg"} /></IconCont>
                //         <IconCont href="https://www.youtube.com/channel/UCyStvq5i-MhAUAzivfBpvhQ" target="_blank" ><InstaIcon src={imgUrl + "/youtube-logo.svg"} /></IconCont>
                //     </IconContainers>

                //     <TextContainer>
                //         <SonabyssIcon src={imgUrl + "/sonabyss-logo.png"} />
                //         <FooterText> <AboutUs>ABOUT US</AboutUs>  &nbsp;  &nbsp;|&nbsp; &nbsp; <ContactUs href="mailto:Official@sonabyss2k22.com" >CONTACT US</ContactUs>  </FooterText>
                //     </TextContainer>

                //     <Dummy></Dummy>

                // </Footer>

//             </CentralContainer>
//         </>
//     )

// }
