import React from 'react'
import Topbar from '../Navs/Topbar'
import './aboutUs.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = () => {
    return (

        <div className='outer'>

            <div className='inner'>
                <Topbar className='topbar' />
                <div className="cards">
                    <div className="card">
                        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='dev' />
                        <div className="text">
                            <span>Subash Paul</span>
                            <span>Full Stack Developer</span>

                        </div>

                        <div className="ico">
                            <a href='http://' target='_blank'>
                                {/* <img src={vector} alt='dev' /> */}
                                <InstagramIcon fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <GitHubIcon className='github' fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <LinkedInIcon fontSize='large' />
                            </a>

                        </div>
                    </div>
                    <div className="card">
                        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='dev' />
                        <div className="text">
                            <span>Subash Paul</span>
                            <span>Full Stack Developer</span>

                        </div>

                        <div className="ico">
                            <a href='http://' target='_blank'>
                                {/* <img src={vector} alt='dev' /> */}
                                <InstagramIcon fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <GitHubIcon className='github' fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <LinkedInIcon fontSize='large' />
                            </a>

                        </div>
                    </div>
                    <div className="card">
                        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='dev' />
                        <div className="text">
                            <span>Subash Paul</span>
                            <span>Full Stack Developer</span>

                        </div>

                        <div className="ico">
                            <a href='http://' target='_blank'>
                                {/* <img src={vector} alt='dev' /> */}
                                <InstagramIcon fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <GitHubIcon className='github' fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <LinkedInIcon fontSize='large' />
                            </a>

                        </div>
                    </div>
                    <div className="card">
                        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='dev' />
                        <div className="text">
                            <span>Subash Paul</span>
                            <span>Full Stack Developer</span>

                        </div>

                        <div className="ico">
                            <a href='http://' target='_blank'>
                                {/* <img src={vector} alt='dev' /> */}
                                <InstagramIcon fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <GitHubIcon className='github' fontSize='large' />
                            </a>
                            <a href="http://" target='_blank'>

                                <LinkedInIcon fontSize='large' />
                            </a>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutUs