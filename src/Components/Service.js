import React from 'react'
import '../Styles/styles.css'


export default function Service(props) {
    return (
        <div className={`service-card ${props.style}`}> 
            <h2 className={`service-title-header ${props.main_title}`}>{props.service_title}</h2>

            <ol className='service-feat-list'>
                <li className='service-feat-item'>{props.feat1}</li>
                <li className='service-feat-item'>{props.feat2}</li>
                <li className='service-feat-item'>{props.feat3}</li>
            </ol>

            <button className={`service-offer-btn ${props.btn_style}`}>{props.btn_cta}</button>
        </div>
    )
}
