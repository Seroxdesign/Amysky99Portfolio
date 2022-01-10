import React from 'react'
import '../Styles/styles.css'


export default function Service(props) {
    return (
        <div className={`service-card ${props.style}`}> 
            <h2 className='service-title-header'>{props.service_title}</h2>

            <ul className=''>
                <li className='service-feat-item'>{props.feat1}</li>
                <li className='service-feat-item'>{props.feat2}</li>
                <li className='service-feat-item'>{props.feat3}</li>
            </ul>

            <button className='service-offer-btn'>Order now</button>
        </div>
    )
}
