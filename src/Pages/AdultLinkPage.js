import React from 'react'
import FooterContent from 'Containers/FooterContent'
import LinkContent from 'Containers/LinkContent'
import { adult_links } from 'Data/Links/AdultLinks'
import { useState } from 'react'
import Nav from 'Components/Nav'
import '../Styles/styles.css'


export default function AdultLinksPage() {

    const [verification_status, set_verify] = useState(false)

    return (
        <div className='home-wrapper'>
            <Nav />

            {verification_status ? 
                <main>
                    <LinkContent links={adult_links}/>
                    <FooterContent />   
                </main>
                :
                <div className='warning-card'>
                    <h2 className='warning-head'>This page contains Adult content</h2>
                    <p className='warning-para'>You may only view this if you are 18+</p>
                    <a href="https://www.amysky99.com/"><button className='warningbtn'>Take me back</button></a>
                    <button className='warningbtn' onClick={() => {
                        set_verify(true)
                    }}>I am 18+</button>
                </div>
            }
            
        </div>
    )
}
