import React from 'react'
import '../Styles/styles.css'

export default function ComingSoon() {
    return (
        <div className='coming-soon-card' style={{backgroundImage: `url(https://i.imgur.com/rI1WO6h.png})`, backgroundSize: 'cover'}}>
            <button className='coming-soon-cta'>Join the Waiting List</button>
        </div>
    )
}
