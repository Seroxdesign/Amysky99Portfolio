import React from 'react'
import FooterContent from 'Containers/FooterContent'
import AboutContent from 'Containers/AboutContent'
import Nav from 'Components/Nav'
import '../Styles/styles.css'


export default function AboutPage() {
    return (
        <div className='home-wrapper' >
            <Nav />
  
            <main>
                <AboutContent />
             
                <FooterContent />   
            </main>
      
        </div>
    )
}
