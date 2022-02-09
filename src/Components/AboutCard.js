import React from 'react'

import '../Styles/styles.css'

export default function AboutCard() {
    return (
        <div className='about-card'>
            <p className='para-about'>
                <em><h2 className='header-ab'>Hello and welcome to my website!</h2></em>
                <br></br>
                <br></br>
                My name is Amy I am a 22 year old social media manager and gamer from the UK.
                <br></br>
                I lived in Poland for most of my life, I still loved English enough to learn it all by myself. I still have a bit of an accent sometimes though. 
                <br></br>
                <br></br>
                I love gaming, currently obsessed with Valorant, I also love nintendo games, sewing and make up and recently I've been trying to stream more on <a style={{textDecoration: 'underline'}} href="https://www.twitch.tv/amysky99x" target="_blank">twitch</a>.
                <br></br>
                <br></br>
                I've been on this Social media journey for 3 years now and it continues to surprise me and inspire me to grow everyday.
            </p>
        </div>
    )
}
