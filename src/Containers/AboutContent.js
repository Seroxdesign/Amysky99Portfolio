import React from 'react'
import ProfileImg from 'Components/ProfileImg'
import Skills from 'Components/Skills'
import AboutCard from 'Components/AboutCard'
import '../Styles/styles.css'

export default function AboutContent() {
    return (
        <div className='about-content' style={{backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F7qOwD8U.jpg&f=1&nofb=1)`, backgroundSize: 'cover'}}>
            <ProfileImg img={"https://i.imgur.com/hxmTqUn.jpg?1"}/>
            <AboutCard />
            <div className=''>
                <h3 className='content-header' style={{color: 'white', borderBottom: '3px solid white'}}>My Skills</h3>
            </div>
            <Skills />
        </div>
    )
}
