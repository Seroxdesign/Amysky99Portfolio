import React from 'react'
import Service from './Service'
import '../Styles/styles.css'


export default function Services() {
    return (
        <div className='service-container'>
            <Service service_title={"Website Redesign"} feat1={"Complete code update"} feat2={"Migrate Website to new host."} feat3={"Search Engine Optimization"} btn_cta={"Contact me"}/>
            <Service service_title={"Custom Website"}  feat1={"Responsive website design."} feat2={"Built completely custom, for you."} feat3={"Modern features (analytics and storage)"}  style={"main-card"} btn_style={"main-btn-service"} main_title={"main-title-service"}  btn_cta={"Order now"}/>   
            <Service service_title={"Free Website"} feat1={"Enter a raffle for a chance to win."} feat2={"Completely custom website"} feat3={"Winners chosen from discord"}  btn_cta={"Join Discord"}/>   
        </div>
    )
}
