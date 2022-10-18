import { CentralContainer, ViewAllButton, Image, ImageContainer, Container, AboutDiv, AboutDivContent, AboutText, SponserImg, SponserImgCont, SponserImgMainContainer, Heading, Footer, LogoDiv, InstaIcon, SonabyssIcon, FooterText, HR, ExtraMarqueeImg, ExtraMarqueeImgCont, SponserHolder, IconContainers, TextContainers, TextContainer, Dummy } from './Styles/Home.styles'
import Slider from './Slider'
import { imgUrl } from '../../../config'
import { Navigate } from 'react-router-dom'

function Bottom() {
    // Navigate('/route',{state:{club}})
    return (
        <>
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


                            <Slider />
                            <ViewAllButton>View All</ViewAllButton>
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
                                <strong>SONABYSS '22</strong>   <br />
                                <strong>EMBRACE YOUR FEARS </strong>  <br /> <br />
                                Ed: 35 <br /> <br />
                                Sonabyss is the yearly cultural fiesta organised by the Recreational And Cultural Activity Forum (RACAF) Committee of NERIST. Orchestrated over a span of three days, it's the time of the year when students from the institute and beyond showcase their talents in various events. It is one of the biggest cultural fests of North Eastern India. <br />
                                <br /> This year, we present to you this spook-tacular 35th edition of Sonabyss,
                                "Sonabyss 2022- Embrace Your Fears" —where talents lurking in the basements come out of the shadows, where we raise our cauldrons high and cheer this ritual with enchanted enthusiasm, it is the annual parade where we conclude the year with ecstasy dancing on the jingle of joy and truly embody the spectre spirit of youth. It is more than a fest, it is more than a feat where we learn the magic within ourselves— it is a custom, a conclusion, a craft of creation.
                                <br /> <br /> So come cast a spell this carnival, come hex it with your charisma; let the magic posess and pierce, come join us and truly—embrace your fears.
                            </AboutText>
                        </AboutDivContent>

                    </AboutDiv>
                </Container>

                {/*-------------------------------------------------------------- Sponser----------------------------------------------------- */}
                <Container>
                    <AboutDiv>
                        <Heading>Sponsers</Heading>
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

                <HR />

                <Footer>
                    <IconContainers>
                        <InstaIcon src={imgUrl + "/insta-logo.svg"} />
                        <InstaIcon src={imgUrl + "/youtube-logo.svg"} />
                    </IconContainers>

                    <TextContainer>
                        <SonabyssIcon src={imgUrl + "/sonabyss-logo.png"} />
                        <FooterText>ABOUT US &nbsp;  &nbsp;|&nbsp; &nbsp;  CONTACT US </FooterText>
                    </TextContainer>

                    <Dummy></Dummy>


                </Footer>

            </CentralContainer>
        </>
    )
}

export default Bottom;