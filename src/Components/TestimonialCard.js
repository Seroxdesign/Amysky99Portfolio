import React from 'react'
import ProfileImg from './ProfileImg'
import '../Styles/styles.css'

export default function TestimonialCard() {
    return (
        <div className='testimonial-card'>
            <ProfileImg />

            <p className='testimonial-review'>
                Let's leave a nice review for the gentleman here, he knows what's up and I assume you do too if you're visiting this page
                Let's leave a nice review for the gentleman here, he knows what's up and I assume you do too if you're visiting this page
                Let's leave a nice review for the gentleman here, he knows what's up and I assume you do too if you're visiting this page
                Let's leave a nice review for the gentleman here, he knows what's up and I assume you do too if you're visiting this page
            </p>

            <div className='testimonial-flipper'>

            </div>

            <button className='testimonial-btn'>Visit Page</button>
        </div>
    )
}
