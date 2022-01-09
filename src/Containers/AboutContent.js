import React from 'react'
import ProfileImg from 'Components/ProfileImg'
import Skills from 'Components/Skills'
import AboutCard from 'Components/AboutCard'
import '../Styles/styles.css'

export default function AboutContent() {
    return (
        <div className='about-content'>
            <ProfileImg img={"https://i.imgur.com/hxmTqUn.jpg?1"}/>
            <AboutCard />
            <div className=''>
                <h3 className='content-header' style={{color: 'white', borderBottom: '3px solid white'}}>My Skills</h3>
            </div>
            <Skills />
        </div>
    )
}
