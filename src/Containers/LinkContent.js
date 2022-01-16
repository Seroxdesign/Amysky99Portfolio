import React from 'react'
import ProfileImg from 'Components/ProfileImg'
import Link from 'Components/Link'
import links from 'Data/Links/Links'
import '../Styles/styles.css'

export default function LinkContent() {
    return (
        <div className='links-content' style={{backgroundImage: `url(https://www.transparenttextures.com/patterns/office.png)`, backgroundSize: 'cover'}}>
            <ProfileImg img={"https://i.imgur.com/hxmTqUn.jpg?1"}/>

            <div className='links-profile-info'>
                <h3 className='links-profile-header'>Serotonin Designs</h3>
        
                <p className='links-profile-para'>Check out my links to follow or contact me</p>
            
            </div>

            {links.map((link, key) => {
                return <Link img={link[0]} title={link[2]} link={link[1]} media={link[3]} key={`social-link-${key}`}/>
            })}

            <div className='logo-clicker'>

            </div>
        </div>
    )
}
