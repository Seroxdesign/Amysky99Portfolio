import React from 'react'
import Navbar from 'Components/Navbar'
import LandingContent from 'Containers/LandingContent'
import WorkContent from 'Containers/WorkContent'
import ComingSoon from 'Components/ComingSoon'
import ServicesContent from 'Containers/ServicesContent'
import FooterContent from 'Containers/FooterContent'
import '../Styles/styles.css'

export default function HomePage() {
    return (
        <div className='home-wrapper'>
      
           
            <Navbar />

            <main> 
                <LandingContent />
                <hr className='header-underline2'></hr>
                <WorkContent />
              
                <ServicesContent />
                <hr className='header-underline2'></hr>
              
                <ComingSoon />
                <FooterContent />
            </main>
        </div>
    )
}
