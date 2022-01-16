import React from 'react'

import LandingContent from 'Containers/LandingContent'

import ServicesContent from 'Containers/ServicesContent'
import FooterContent from 'Containers/FooterContent'
import CopyButton from 'Components/CopyButton'
import HamBurgerNav from 'Components/HamBurgerNav'
import PoweredBy from 'Components/PoweredBy'
import '../Styles/styles.css'

export default function HomePage() {
    return (
        <div className='home-wrapper' >

           <HamBurgerNav />
      

            <main> 

            
            <CopyButton />
                <LandingContent />
                <PoweredBy />
                <hr className='header-underline2'></hr>
              
              
                <ServicesContent />
                <hr className='header-underline2'></hr>
              
     
                <FooterContent />
            </main>
        </div>
    )
}
