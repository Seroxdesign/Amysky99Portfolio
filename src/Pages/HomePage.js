import React from 'react'
import TestimonialContent from 'Containers/TestimonialContent'
import LandingContent from 'Containers/LandingContent'
import ProcessContent from 'Containers/ProcessContent'
import ServicesContent from 'Containers/ServicesContent'
import FooterContent from 'Containers/FooterContent'
import CopyButton from 'Components/CopyButton'
import HamBurgerNav from 'Components/HamBurgerNav'
import PoweredBy from 'Components/PoweredBy'
import ProjectContent from 'Containers/ProjectContent'
import '../Styles/styles.css'

export default function HomePage() {
    return (
        <div className='home-wrapper' >

           <HamBurgerNav />
      

            <main> 

            
            <CopyButton />
                <LandingContent />
                <PoweredBy />
                <ProcessContent />
                <ProjectContent />
                <TestimonialContent />
                <ServicesContent />
                <FooterContent />
            </main>
        </div>
    )
}
