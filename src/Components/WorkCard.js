import React from 'react'
import { getAnalytics, logEvent } from "firebase/analytics";
import '../Styles/styles.css'

export default function WorkCard(props) {

    const analytics = getAnalytics();

    return (
        <li className={props.direction}>
            <div className='work-svg-holder'>
                <img src={props.img} className='skill-img'></img>
            </div>
            
            <div className='work-details'>
                <h3 className='work-title'>{props.title}</h3>
                <p className='work-para'>{props.para}</p>
                <a target="_blank" href={props.link} ><button className='work-link' onClick={() => logEvent(analytics, `${props.link_title} button click`)} > {props.link_title}</button></a>
                <a target="_blank" href={props.link_cta} ><button className='work-link' onClick={() => logEvent(analytics, `${props.link_titlecta} button click #2`)}> {props.link_titlecta}</button></a>
            </div>
        </li>
    )
}
