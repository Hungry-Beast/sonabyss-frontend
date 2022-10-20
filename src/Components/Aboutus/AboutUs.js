import React, { useEffect, useState } from 'react'
import Topbar from '../Navs/Topbar'
import './aboutUs.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { prodURL } from '../../config';
import styled from "@emotion/styled";

const AboutUs = () => {
    const [data, setData] = useState([])
    const [dev, setDev] = useState([])
    const [creHead, setCreHead] = useState([])
    const [pub, setPub] = useState([]);
    const [staInc, setStaInc] = useState([])
    const [sona, setSona] = useState([])
    const [hos, setHos] = useState([])
    const [media, setMedia] = useState([])
    const [org, setOrg] = useState([])
    const [auditor, setAuditor] = useState([])
    const [cosplay, setCosplay] = useState([])
    let Dev
    // CrHead, Pub, StageIn, Sonabyss, Hos, Media
    const fetchData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${prodURL}/organisers`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log(result)

                const [Developers, Creative_Head, Pub_Branding, Stage_Incharge, Sonabyss_Incharge, Hospitality_Incharge, Media_Incharge, Org_secy, Auditor, Cosplay] = result;
                setDev(Developers);
                setCreHead(Creative_Head)
                setPub(Pub_Branding);
                setStaInc(Stage_Incharge)
                setSona(Sonabyss_Incharge)
                setHos(Hospitality_Incharge)
                setMedia(Media_Incharge)
                setOrg(Org_secy)
                setAuditor(Auditor)
                setCosplay(Cosplay)

            })
            .catch(error => console.log('error', error));
    }

    const TeamPost = styled.div`
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        background: linear-gradient(90deg, #38182E 1.45%, #24111E 36.76%, #130912 107.32%);

    `;
    const Orangediv = styled.div`
        width: 1%;
        background-color: #FF461F;
    `;
    const Post = styled.span`
        font-size: 2em;
        padding: 0.5em 0.5em;
        @media (max-width: 992px) {
            font-size: 1.5em;
        }
    `;


    useEffect(() => {
        fetchData()


    }, [])




    {/* <div className="card">
                        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='dev' />
                        <div className="text_card">
                            <span>Subash Paul</span>
                            <span>Full Stack Developer</span>
                        </div>
                        <div className="ico">
                            <a href='http://' target='_blank'>
                                <InstagramIcon fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <GitHubIcon className='github' fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <LinkedInIcon fontSize='large' />
                            </a>

                        </div>
                    </div> */}

    return (

        <div className='outer'>

            <div className='inner'>
                <Topbar className='topbar' />

                <div className="head">

                    <h1>Meet Our Team</h1>
                </div>
                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Organising Secretary</Post>
                </TeamPost>
                <div className="cards">
                    {
                        org?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.fb} target='_blank'>

                                            <FacebookIcon className='github' fontSize='large' />
                                        </a>
                                        {/* <a href={d.linkedin} target='_blank'>

                                            <LinkedInIcon fontSize='large' />
                                        </a> */}

                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Web Team</Post>
                </TeamPost>
                <div className="cards">
                    {
                        dev?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.github} target='_blank'>

                                            <GitHubIcon className='github' fontSize='large' />
                                        </a>
                                        <a href={d.linkedin} target='_blank'>

                                            <LinkedInIcon fontSize='large' />
                                        </a>

                                    </div>
                                </div>

                            )
                        })

                    }
                </div>

                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Pub and Branding</Post>
                </TeamPost>
                <div className="cards">
                    {
                        pub?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.fb} target='_blank'>

                                            <FacebookIcon className='github' fontSize='large' />
                                        </a>
                                        {/* <a href={d.linkedin} target='_blank'>

                                            <LinkedInIcon fontSize='large' />
                                        </a> */}

                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Stage Incharges</Post>
                </TeamPost>
                <div className="cards">
                    {
                        staInc?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.fb} target='_blank'>

                                            <FacebookIcon className='github' fontSize='large' />
                                        </a>


                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Sonabyss Incharges</Post>
                </TeamPost>
                <div className="cards">
                    {
                        sona?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.fb} target='_blank'>

                                            <FacebookIcon className='github' fontSize='large' />
                                        </a>
                                        {/* <a href={d.linkedin} target='_blank'>

                                            <LinkedInIcon fontSize='large' />
                                        </a> */}

                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Media Incharges</Post>
                </TeamPost>
                <div className="cards">
                    {
                        media?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.fb} target='_blank'>

                                            <FacebookIcon className='github' fontSize='large' />
                                        </a>
                                        {/* <a href={d.linkedin} target='_blank'>

                                            <LinkedInIcon fontSize='large' />
                                        </a> */}

                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Auditor</Post>
                </TeamPost>
                <div className="cards">
                    {
                        hos?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.fb} target='_blank'>

                                            <FacebookIcon className='github' fontSize='large' />
                                        </a>


                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
                <TeamPost>
                    <Orangediv></Orangediv>
                    <Post>Hospitality Incharges</Post>
                </TeamPost>
                <div className="cards">
                    {
                        hos?.map(d => {
                            return (

                                <div className="card">
                                    <img src={d.image} alt='dev' />
                                    <div className="text_card">
                                        <span>{d.name}</span>
                                        <span>{d.position}</span>
                                    </div>
                                    <div className="ico">
                                        <a href={d.insta} target='_blank'>
                                            {/* <img src={vector} alt='dev' /> */}
                                            <InstagramIcon fontSize='large' />
                                        </a>
                                        <a href={d.fb} target='_blank'>

                                            <FacebookIcon className='github' fontSize='large' />
                                        </a>


                                    </div>
                                </div>

                            )
                        })

                    }
                </div>



            </div>
        </div>
    )
}

export default AboutUs