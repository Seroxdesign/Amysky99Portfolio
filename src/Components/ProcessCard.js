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
                        <li className='project-list-item'>Ask you questions to better understand your needs.</li>
                        <li className='project-list-item'>Design a blueprint using Figma</li>
                        <li className='project-list-item'>Update and tweak the design using your input.</li>
                    </ul>
                </div>

                <div className='process-list-container'>
                    <div className='process-title-intro-container'>
                        <h2 className='process-title'>Development</h2>

                        <p className='process-explain-para'>
                            The next step is to give life to your ideas.
                        </p>
                    </div>
                    <ul className='process-list'>
                        <li className='project-list-item'>Build a first draft using the most in demand tech.</li>
                        <li className='project-list-item'>Make adjustments and improvements along the way.</li>
                        <li className='project-list-item'>Test and deploy your project.</li>
                    </ul>
                </div>

                <div className='process-list-container'>
                    <div className='process-title-intro-container'>
                        <h2 className='process-title'>Marketing</h2>

                        
                        <p className='process-explain-para'>
                            Finally, let's get you project out there.
                        </p>
                    </div>
                    <ul className='process-list'>
                        <li className='project-list-item'>Devise a marketing strategy built around your needs.</li>
                        <li className='project-list-item'>Find your niche, join some platforms and begin posting.</li>
                        <li className='project-list-item'>Grow and leverage your audience to launch your product.</li>
                    </ul>
                </div>
            
            </div>

            <a href="https://form.jotform.com/220207089713149" style={{marginLeft: '0%'}} target="_blank"><button className='process-cta-btn'>Let's talk</button></a>
        </div>
    )
}
