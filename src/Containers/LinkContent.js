import React from 'react'
import ProfileImg from 'Components/ProfileImg'
import Link from 'Components/Link'
import { getAnalytics, logEvent } from "firebase/analytics";

import '../Styles/styles.css'

export default function LinkContent(props) {

    const analytics = getAnalytics();

    return (
        <div className='links-content' style={{backgroundImage: `url(https://www.transparenttextures.com/patterns/office.png)`, backgroundSize: 'cover'}}>
            <ProfileImg img={"https://i.imgur.com/z0n6f40.jpeg"}/>

            <div className='links-profile-info'>
                <h3 className='links-profile-header'>AmySky99</h3>
        
                <p className='links-profile-para'>Check out my links to follow or contact me</p>
            
            </div>

            {props.links.map((link, key) => {
                return <Link img={link[0]} title={link[2]} link={link[1]} media={link[3]} key={`social-link-${key}`} onClick={() => logEvent(analytics, `${link[2]} link button`)} />
            })}

            <div className='logo-clicker'>

            </div>
        </div>
    )
}
