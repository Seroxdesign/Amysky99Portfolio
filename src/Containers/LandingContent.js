import React from 'react'
import MainHeader from 'Components/MainHeader'
import SecondaryHeader from 'Components/SecondaryHeader'
import LandingRouting from 'Components/LandingRouting'
import '../Styles/styles.css'


export default function LandingContent() {
    return (
        <div className='content'>
            <MainHeader />
            <SecondaryHeader />
            <LandingRouting />
        </div>
    )
}
