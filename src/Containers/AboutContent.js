import React from 'react'
import ProfileImg from 'Components/ProfileImg'
import WorkList from 'Components/WorkList'
import Skills from 'Components/Skills'
import AboutCard from 'Components/AboutCard'
import '../Styles/styles.css'

export default function AboutContent() {
    return (
        <div className='about-content' style={{backgroundImage: `url(https://www.transparenttextures.com/patterns/office.png)`, backgroundSize: 'cover'}}>
            <ProfileImg img={"https://i.imgur.com/z0n6f40.jpeg"}/>
            <div className=''>
                <h3 className='content-header' style={{color: 'white', borderBottom: '3px solid white'}}>My Work</h3>
            </div>
            <WorkList />
            <div className=''>
                <h3 className='content-header' style={{color: 'white', borderBottom: '3px solid white'}}>My Skills</h3>
            </div>
            <Skills />
        </div>
    )
}
