import React from 'react'
import styled from 'styled-components';
import "./youtube.css";
import { imgUrl } from "../../../config";

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

const Youtube = () => {
    return (
        <div className='youtube'>
            <div className="thumbnail">
                <iframe width="841" height="502" src="https://www.youtube.com/embed/14CeiS_ewYo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ borderRadius: '29px' }} allowfullscreen></iframe>
                <div className="bottom">
                    <div className="text">

                        <h1 className="title">Sonabyss_2k22 Teaser</h1>
                        <span>Come Join Us</span>
                    </div>
                    <a href='https://www.youtube.com/watch?v=14CeiS_ewYo' target='_blank' style={{ alignSelf: 'center' }}>
                        <InstaIcon src={imgUrl + "/youtube-logo.svg"} className='youtube_ico' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Youtube