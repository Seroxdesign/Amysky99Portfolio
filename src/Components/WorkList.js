import React from 'react'
import WorkCard from './WorkCard';
import webdev from '../Data/webdev.svg'
import socialmedia from '../Data/socialmedia.svg'
import ubereats from '../Data/ubereats.svg'
import youtuber from '../Data/youtuber.svg'
import '../Styles/styles.css'

export default function WorkList() {
    return (
        <ul className='work-list'>
            <WorkCard direction={"work-item-r"} 
            title={"Web Developer"} 
            img={webdev} 
            para={"With 2 years experience building responsive websites and a commitment to customer satisfaction you can rest assured your website will be taken care of."} 
            link_title={"View More"} link={""} 
            link_titlecta={"Hire Me"} link_cta={""} />
            
            <WorkCard direction={"work-item"} 
            title={"Social Media Manager"} 
            img={socialmedia} 
            para={"We've developed a track record of growing social media accounts cross platform. Grow your media presence to increase your reach and conversions."} 
            link_title={"View Accounts"} link={""} 
            link_titlecta={"Hire Me"} link_cta={""} />
            
            <WorkCard direction={"work-item-r"} 
            title={"Youtube Creator"} 
            img={youtuber} 
            para={"Information is the key to success, that's why we are committed to sharing our processes with you, for free on Youtube."} 
            link_title={"View my channel"} link={""} 
            link_titlecta={"Subscribe"} link_cta={""} />
            
            <WorkCard direction={"work-item"}
            title={"Uber Eats Delivery Driver"}
            img={ubereats}
            para={"6 Months ago I started delivering food on a bike with Uber Eats, since then my health has improved and so has my financial situation. "} 
            link_title={"Learn More"} link={""} 
            link_titlecta={"Use My Referral"} link_cta={""} />
        </ul>
    )
}
