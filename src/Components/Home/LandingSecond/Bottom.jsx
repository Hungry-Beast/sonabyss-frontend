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
import { Link, Navigate, useNavigate } from "react-router-dom";
import Youtube from "../Landing/Youtube";

// import "./Bottom.css"
function Bottom({ setClubLoaded }) {
    // const [showClubs, setShowClubs] = useState(true);
    const navigate = useNavigate();
    return (
        <>
            <CentralContainer>
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


                {/*-------------------------------------------------------------- About ----------------------------------------------------- */}

                <Container>
                    <AboutDiv>
                        <Heading>What is Racaf</Heading>
                        <AboutDivContent>

                            <ImageContainer>
                                <Image src={imgUrl + "/Homepage.png"} />
                            </ImageContainer>
                            <AboutText>
                                <strong>SONABYSS '22</strong>   <br />
                                <strong>EMBRACE YOUR FEARS </strong>  <br /> <br />
                                Ed: 35 <br /> <br />
                                Sonabyss is the yearly cultural fiesta organised by the Recreational And Cultural Activity Forum (RACAF) Committee of NERIST. Orchestrated over a span of three days, it's the time of the year when students from the institute and beyond showcase their talents in various events. It is one of the biggest cultural fest of North East India. <br />
                                <br /> This year, we present to you this spook-tacular 35th edition of Sonabyss,
                                "Sonabyss 2022- Embrace Your Fears" —where talents lurking in the basements come out of the shadows, where we raise our cauldrons high and cheer this ritual with enchanted enthusiasm, it is the annual parade where we conclude the year with ecstasy dancing on the jingle of joy and truly embody the spectre spirit of youth. It is more than a fest, it is more than a feat where we learn the magic within ourselves— it is a custom, a conclusion, a craft of creation.
                                <br /> <br /> So come cast a spell this carnival, come hex it with your charisma; let the magic posess and pierce, come join us and truly—embrace your fears.
                            </AboutText>
                        </AboutDivContent>

                    </AboutDiv>
                </Container>


                {/*-------------------------------------------------------------- Clubs ----------------------------------------------------- */}
                <Container>
                    <AboutDiv>
                        <Heading>Clubs</Heading>
                        <AboutDivContent>


                            <ImageContainer>
                                {/* <Image src={back} /> */}
                                <Image src={imgUrl + "/Homepage.png"} />
                            </ImageContainer>

                            <Slider setClubLoaded={setClubLoaded} />

                            {/* <ViewAllButton onClick={() => navigate("/allclubs")} >View All</ViewAllButton> */}
                        </AboutDivContent>
                    </AboutDiv>

                </Container>



                {/*-------------------------------------------------------------- Sponser----------------------------------------------------- */}
                <Container>
                    <AboutDiv>
                        <Heading>Sponsors</Heading>
                        <AboutDivContent>

                            <ImageContainer>
                                <Image src={imgUrl + "/Homepage.png"} />
                            </ImageContainer>

                            <SponserImgMainContainer>
                                <SponserHolder>
                                    <SponserImgCont>
                                        <SponserImg src={imgUrl + "/cat.png"} />
                                    </SponserImgCont>
                                    <SponserImgCont>
                                        <SponserImg src={imgUrl + "/cat.png"} />
                                    </SponserImgCont>
                                    <SponserImgCont>
                                        <SponserImg src={imgUrl + "/cat.png"} />
                                    </SponserImgCont>
                                </SponserHolder>
                            </SponserImgMainContainer>

                        </AboutDivContent>

                    </AboutDiv>
                </Container>

                {/*-------------------------------------------------------------- Organizer ----------------------------------------------------- */}

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
                                        <SponserImg src={imgUrl + "/Galli-min.jpg"} />
                                        <SponserName>Galli Beyong <br /> Racaf Secretary</SponserName>
                                    </SponserImgCont>
                                    <SponserImgCont>
                                        <SponserImg src={imgUrl + "/MudangPullo.jpg"} />
                                        <SponserName>Mudang Pullo<br />Assistant Racaf Sec.</SponserName>
                                    </SponserImgCont>
                                    <SponserImgCont>
                                        <SponserImg src={imgUrl + "/MojiRiba.jpg"} />
                                        <SponserName>Moji Riba <br /> Event Manager</SponserName>
                                    </SponserImgCont>
                                    <SponserImgCont>
                                        <SponserImg src={imgUrl + "/MaruTalu.jpg"} />
                                        <SponserName>Maru Talu <br /> Organising Secretary</SponserName>
                                    </SponserImgCont>

                                </SponserHolder>
                            </SponserImgMainContainer>

                        </AboutDivContent>

                    </AboutDiv>
                </Container>

                {/*-------------------------------------------------------------- Footer ----------------------------------------------------- */}

                <HR />

                <Footer>
                    <IconContainers>
                        <IconCont href="https://instagram.com/sonabyss2k22?igshid=YmMyMTA2M2Y=" target="_blank" ><InstaIcon src={imgUrl + "/insta-logo.svg"} /></IconCont>
                        <IconCont href="https://www.youtube.com/channel/UCyStvq5i-MhAUAzivfBpvhQ" target="_blank" ><InstaIcon src={imgUrl + "/youtube-logo.svg"} /></IconCont>
                    </IconContainers>

                    <TextContainer>
                        <SonabyssIcon src={imgUrl + "/sonabyss-logo.png"} />
                        <FooterText> <Link style={{ textDecoration: "none" }} className="about-us" to="/aboutUs" ><AboutUs>ABOUT US</AboutUs></Link>  &nbsp;  &nbsp;|&nbsp; &nbsp; <ContactUs href="mailto:Official@sonabyss2k22.com" >CONTACT US</ContactUs>  </FooterText>
                    </TextContainer>

                    <Dummy></Dummy>


                </Footer>

            </CentralContainer>
        </>
    )

}
export default Bottom;

