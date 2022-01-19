import React from 'react'
import '../Styles/styles.css'

export default function ProcessCard() {
    return (
        <div className='process-card'>
            <div className='process-lists'>
                <div className='process-list-container'>
                    <div className='process-title-intro-container'>
                        <h2 className='process-title'>Design</h2>

                        <p className='process-explain-para'>
                            Every project starts with a blueprint.
                        </p>
                    </div>
                    <ul className='process-list'>
                    
                    </ul>
                </div>

                <div className='process-list-container'>
                    <div className='process-title-intro-container'>
                        <h2 className='process-title'>Development</h2>

                        <p className='process-explain-para'>

                        </p>
                    </div>
                    <ul className='process-list'>

                    </ul>
                </div>

                <div className='process-list-container'>
                    <div className='process-title-intro-container'>
                        <h2 className='process-title'>Marketing</h2>

                        
                        <p className='process-explain-para'>

                        </p>
                    </div>
                    <ul className='process-list'>

                    </ul>
                </div>
            
            </div>

            <button className='process-cta-btn'>Let's talk</button>
        </div>
    )
}
