import React from 'react'
import Service from './Service'
import '../Styles/styles.css'


export default function Services() {
    return (
        <div className='service-container'>
            <Service service_title={"Website Redesign"} feat1={"Complete code update"} feat2={"Migrate Website to new host."} feat3={"SEO"} />
            <Service service_title={"Custom Website"}  feat1={"Responsive website design."} feat2={"Built completely custom, for you."} feat3={"Modern features (analytics and storage)"}  style={"main-card"}/>   
            <Service service_title={"Website Cloning"} feat1={"Clone a website you like"} feat2={"Full features."} feat3={"Responsive design"}/>   
        </div>
    )
}
