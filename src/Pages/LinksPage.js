import React from 'react'
import FooterContent from 'Containers/FooterContent'
import Navbar from 'Components/Navbar'
import LinkContent from 'Containers/LinkContent'
import '../Styles/styles.css'


export default function LinksPage() {
    return (
        <div className='home-wrapper'>
            <Navbar />
            <main>
                <LinkContent />
                <FooterContent />   
            </main>
      
        </div>
    )
}
