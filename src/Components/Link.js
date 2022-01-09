import React from 'react'
import '../Styles/styles.css'

export default function Link(props) {
    return (
        <a className='link-container' href={props.link} target="_blank">
            <div className='link-data'>
                <img className='link-img-small' src={props.img} alt=""></img>
                <div className="social-titles">
                    <h3 className="head-s-1">{props.media}</h3>
                    <h3 className="head-s-2">{props.title}</h3>
                </div>
            </div>
        </a>
     
    )
}
