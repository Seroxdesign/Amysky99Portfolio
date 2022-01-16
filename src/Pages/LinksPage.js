import React from 'react'
import FooterContent from 'Containers/FooterContent'
import LinkContent from 'Containers/LinkContent'
import HamBurgerNav from 'Components/HamBurgerNav'
import '../Styles/styles.css'


export default function LinksPage() {
    return (
        <div className='home-wrapper'>
            <HamBurgerNav />

            <main>
                <LinkContent />
                <FooterContent />   
            </main>
      
        </div>
    )
}
