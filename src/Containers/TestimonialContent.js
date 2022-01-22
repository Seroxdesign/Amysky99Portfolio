import React from 'react'
import TestimonialCard from 'Components/TestimonialCard'
import '../Styles/styles.css'

export default function TestimonialContent() {
    return (
        <div className='container-content testimonial-content invisible'>
            <h2 className='content-header'>Testimonials</h2>
            <TestimonialCard />
        </div>
    )
}
