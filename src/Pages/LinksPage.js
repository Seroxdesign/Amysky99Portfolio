import React from 'react'
import FooterContent from 'Containers/FooterContent'
import LinkContent from 'Containers/LinkContent'
import links from 'Data/Links/Links'
import Nav from 'Components/Nav'
import '../Styles/styles.css'


export default function LinksPage() {
    return (
        <div className='home-wrapper'>
            <Nav />

            <main>
                <LinkContent links={links}/>
                <FooterContent />   
            </main>
      
        </div>
    )
}
