import React from 'react'
import TestimonialCard from 'Components/TestimonialCard'
import '../Styles/styles.css'

export default function TestimonialContent() {
    return (
        <div className='container-content testimonial-content'>
            <h2 className='content-header'>Testimonials</h2>
            <TestimonialCard />
        </div>
    )
}
