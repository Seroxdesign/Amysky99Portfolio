import React from 'react'
import '../Styles/styles.css'

export default function Link(props) {
    return (
        <a className='link-container' href={props.link} target="_blank">
            <h3 className="head-s-1">{props.media}</h3>
        </a>
     
    )
}
