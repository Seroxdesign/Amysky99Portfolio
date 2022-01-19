import React from 'react'
import ProcessCard from 'Components/ProcessCard'
import '../Styles/styles.css'

export default function ProcessContent() {
    return (
        <div className='process-content'>
            <h2 className='content-header'>Our process</h2>
            
            <ProcessCard />
        </div>
    )
}
