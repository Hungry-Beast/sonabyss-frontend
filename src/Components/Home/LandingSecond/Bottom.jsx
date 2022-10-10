import { CentralContainer, ViewAllButton, Image, ImageContainer, Container, AboutDiv, AboutDivContent, AboutText, SponserImg, SponserImgCont, SponserImgMainContainer, Heading, Footer, LogoDiv, InstaIcon, SonabyssIcon, FooterText, HR } from './Styles/Home.styles'
// import back from '../images/back.png'
// import back from '../images/Homepage.png'
// import cat from '../images/Cat.jpg'
import Slider from './Slider'
// import instalogo from '../images/insta-logo.png'
// import sonabysslogo from '../images/Logo-short 1.png'
import { imgUrl } from '../../../config'

function Bottom() {
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
                                {/* <Image src={back} /> */}
                                <Image src={imgUrl + "/Homepage.png"} />
                            </ImageContainer>
                            <AboutText>
                                Survive the Night is an intense hide and seek horror game created by Aurek Team, where you must run, hide, and do whatever you can to survive until 6am while trying to avoid the slasher. Every intermission, one player is chosen as the slasher,
                                while the rest are playing as survivors. The slasher has to try to hunt down and kill all survivors, and the survivors will have to survive until 6am, while trying to avoid
                                getting killed by the slasher. The game includes a wild variety of gears and perks which survivors can use to survive, and different kinds of slashers with each having their own unique
                                abilities to counter survivors. Players gain points (P||) and XP after every victory, where they can use points to purchase new equipment and XP to rank up and unlock special things.
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