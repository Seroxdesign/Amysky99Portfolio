import React from 'react'
import MainHeader from 'Components/MainHeader'
import SecondaryHeader from 'Components/SecondaryHeader'
import LandingRouting from 'Components/LandingRouting'
import '../Styles/styles.css'


export default function LandingContent() {
    return (
        <div className='content' style={{backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F7qOwD8U.jpg&f=1&nofb=1)`, backgroundSize: 'cover'}}>
            <MainHeader />
            <SecondaryHeader />
            <LandingRouting />
        </div>
    )
}
