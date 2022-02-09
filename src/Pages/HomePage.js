import React from 'react'
import LandingContent from 'Containers/LandingContent'
import ProcessContent from 'Containers/ProcessContent'
import ServicesContent from 'Containers/ServicesContent'
import FooterContent from 'Containers/FooterContent'
import CopyButton from 'Components/CopyButton'
import Nav from 'Components/Nav'
import PoweredBy from 'Components/PoweredBy'
import '../Styles/styles.css'

export default function HomePage() {
    return (
        <div className='home-wrapper' >

           <Nav />
      

            <main> 

            
            <CopyButton />
                <LandingContent />
                <PoweredBy />
                <ProcessContent />
           
               
                <ServicesContent />
                <FooterContent />
            </main>
        </div>
    )
}
