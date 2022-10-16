import { CentralContainer, ViewAllButton, Image, ImageContainer, Container, AboutDiv, AboutDivContent, AboutText, SponserImg, SponserImgCont, SponserImgMainContainer, Heading, Footer, LogoDiv, InstaIcon, SonabyssIcon, FooterText, HR } from './Styles/Home.styles'
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
                        <AboutDivContent>

                            <ImageContainer>
                                {/* <Image src={back} /> */}
                                <Image src={imgUrl + "/Homepage.png"} />
                            </ImageContainer>

                            <Heading>Clubs</Heading>
                            <Slider />
                            <ViewAllButton>View All</ViewAllButton>
                        </AboutDivContent>
                    </AboutDiv>

                </Container>

                {/*-------------------------------------------------------------- About ----------------------------------------------------- */}

                <Container>
                    <AboutDiv>

                        <AboutDivContent>
                            <Heading>About</Heading>
                            <ImageContainer>
                                <Image src={imgUrl + "/Homepage.png"} />
                            </ImageContainer>
                            <AboutText>
                                SONABYSS '22
                                EMBRACE YOUR FEARS
                                Ed: 35
                                Sonabyss is the yearly cultural fiesta organised by the Recreational And Cultural Activity Forum (RACAF) Committee of NERIST. Orchestrated over a span of three days, it's the time of the year when students from the institute and beyond showcase their talents in various events. It is one of the biggest cultural fests of North Eastern India.
                                This year, we present to you this spook-tacular 35th edition of Sonabyss,
                                "Sonabyss 2022- Embrace Your Fears" —where talents lurking in the basements come out of the shadows, where we raise our cauldrons high and cheer this ritual with enchanted enthusiasm, it is the annual parade where we conclude the year with ecstasy dancing on the jingle of joy and truly embody the spectre spirit of youth. It is more than a fest, it is more than a feat where we learn the magic within ourselves— it is a custom, a conclusion, a craft of creation.
                                So come cast a spell this carnival, come hex it with your charisma; let the magic posess and pierce, come join us and truly—embrace your fears.
                            </AboutText>
                        </AboutDivContent>

                    </AboutDiv>
                </Container>

                {/*-------------------------------------------------------------- Sponser----------------------------------------------------- */}
                <Container>
                    <AboutDiv>

                        <AboutDivContent>
                            <Heading>Sponsers</Heading>
                            <ImageContainer>
                                {/* <Image src={back} /> */}
                                <Image src={imgUrl + "/Homepage.png"} />
                            </ImageContainer>

                            <SponserImgMainContainer>
                                <SponserImgCont>
                                    <SponserImg src={imgUrl + "/cat.png"} />
                                </SponserImgCont>
                                <SponserImgCont>
                                    <SponserImg src={imgUrl + "/cat.png"} />
                                </SponserImgCont>
                                <SponserImgCont>
                                    <SponserImg src={imgUrl + "/cat.png"} />
                                </SponserImgCont>
                            </SponserImgMainContainer>

                        </AboutDivContent>

                    </AboutDiv>
                </Container>

                <HR />

                <Footer>
                    <InstaIcon src={imgUrl + "/insta-logo.png"} />
                    <SonabyssIcon src={imgUrl + "/sonabyss-logo.png"} />
                    <FooterText>ABOUT US | CONTACT US </FooterText>
                </Footer>

            </CentralContainer>
        </>
    )
}

export default Bottom;