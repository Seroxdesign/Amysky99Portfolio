import React from 'react'
import '../Styles/styles.css'

export default function ProcessCard() {
    return (
        <div className='process-card'>
            <div className='process-lists'>
                
                <div className='process-list-container' style={{backgroundImage: 'url("https://i.imgur.com/B1SZTnv.jpg")', backgroundSize: 'cover'}}>
                <a href="https://form.jotform.com/220207089713149" style={{marginLeft: '0%'}} target="_blank"><button className='process-cta-btn'>Let's talk</button></a>
                </div>

                <div className='process-list-container' style={{backgroundImage: 'url("https://i.imgur.com/FPwafaq.png")', backgroundSize: 'cover'}}>
                <a href="https://form.jotform.com/220207089713149" style={{marginLeft: '0%'}} target="_blank"><button className='process-cta-btn'>Let's talk</button></a>
                </div>

                <div className='process-list-container'>
                <a href="https://form.jotform.com/220207089713149" style={{marginLeft: '0%'}} target="_blank"><button className='process-cta-btn'>Let's talk</button></a>
                </div>
            
            </div>

        
        </div>
    )
}
