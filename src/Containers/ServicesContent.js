import React from 'react'

import Services from 'Components/Services'
import '../Styles/styles.css'


export default function ServicesContent() {
    return (
        <div className='services-content'>
            <div className='head-cont'>
                <h3 className='content-header'>Services</h3>
            </div>

            <Services />
        </div>
    )
}
