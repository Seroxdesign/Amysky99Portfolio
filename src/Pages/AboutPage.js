import React from 'react'
import FooterContent from 'Containers/FooterContent'
import AboutContent from 'Containers/AboutContent'
import Navbar from 'Components/Navbar'

import '../Styles/styles.css'


export default function AboutPage() {
    return (
        <div className='home-wrapper' >
            <Navbar />
            <main>
                <AboutContent />
                <FooterContent />   
            </main>
      
        </div>
    )
}
