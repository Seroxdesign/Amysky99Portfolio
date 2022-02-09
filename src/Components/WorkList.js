import React from 'react'
import WorkCard from './WorkCard';
import SocialMedia from '../Data/Imgs/SocialMedia.png'
import Gamer from '../Data/Imgs/Gamer.png'
import Solutions from '../Data/Imgs/Solutions.png'
import TikTok from '../Data/Imgs/TikTok.png'
import '../Styles/styles.css'

export default function WorkList() {
    return (
        <ul className='work-list'>
            <WorkCard direction={"work-item-r"} 
            title={"Gamer Girl"} 
            img={Gamer} 
            para={"I love video games, I play on PS4, PC and Switch. Some of my favorite games right now are Valorant and Phasmophobia"} 
            link_title={"Book a Game"} link={"https://form.jotform.com/220394731934155"} 
            link_titlecta={"Watch Me Play"} link_cta={"https://www.twitch.tv/amysky99x"} />
            
            <WorkCard direction={"work-item"} 
            title={"Social Media Manager"} 
            img={SocialMedia} 
            para={"I have a track record of growing social media accounts cross platforms. I can help you grow your media presence too."} 
            link_title={"View Accounts"} link={"https://www.amysky99.com/links"} 
            link_titlecta={"Let's talk"} link_cta={"https://form.jotform.com/220394731934155"} />
            
            <WorkCard direction={"work-item-r"} 
            title={"Tik-Tok Creator"} 
            img={TikTok} 
            para={"I use Social Media a lot, but one of my favorites has consistently been Tiktok, I still love it and use it daily."} 
            link_title={"View Tik-Tok"} link={"https://www.tiktok.com/@amysky99x?"} 
            link_titlecta={"Brands Contact"} link_cta={"https://form.jotform.com/220394731934155"} />
            
            <WorkCard direction={"work-item"}
            title={"Solutions Expert"}
            img={Solutions}
            para={"Being a digital creator is more rewarding than ever before, but it's also very difficult, if you've had issues with accounts reach out, I can help."} 
            link_title={"Learn More"} link={"https://www.digitalvidya.com/blog/social-media-expert/"} 
            link_titlecta={"Get In Touch"} link_cta={"https://form.jotform.com/220394731934155"} />
        </ul>
    )
}
