import React from 'react'
import ProfileImg from './ProfileImg'
import '../Styles/styles.css'

export default function TestimonialCard() {
    return (
        <div className='testimonial-card'>
            <ProfileImg />

            <p className='testimonial-review'></p>

            <div className='testimonial-flipper'>

            </div>

            <button className='testimonial-btn'>Visit Page</button>
        </div>
    )
}
