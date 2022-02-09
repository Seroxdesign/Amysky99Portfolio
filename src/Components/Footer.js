import React from 'react'
import '../Styles/styles.css'

export default function Footer() {
    return (
        <div className='footer-wrapper'>
               <div className="support-me">
            <h2 className="support-header">Social Media</h2>
                <p className="support-para">
                    If you need help starting out check the links down below.
                </p>
                
   
                <a className="support-me-link" href="https://www.amysky99.com" target="_blank">
                    <button className="support-me-btn">View My links</button>
                </a>

                <a className="support-me-link"  href="https://form.jotform.com/220394731934155" target="_blank">
                    <button className="support-me-btn">Contact Me</button>
                </a>
                <a className="support-me-link"  href="https://ataria.media/why-is-social-media-important/" target="_blank">
                    <button className="support-me-btn">Learn More</button>
                </a>
            </div>
           
            <div className="support-me">
                <h2 className="support-header">Support me</h2>
                <p className="support-para">
                    Creating connections and learning about media is my passion, help support me at:
                </p>
                
   
                <a className="support-me-link" href="https://www.peachpay.me/amysky99/payme" target="_blank">
                    <button className="support-me-btn">Donate</button>
                </a>

                <a className="support-me-link"  href="https://www.patreon.com/join/amysky99" target="_blank">
                    <button className="support-me-btn">Patreon</button>
                </a>
                <a className="support-me-link"  href="https://www.etsy.com/uk/shop/amysky99" target="_blank">
                    <button className="support-me-btn">Merch</button>
                </a>
          
             
            </div>
            
            <div className="site-map">
            <h2 className="support-header">Web Services</h2>
                <p className="support-para">
                    If you need support growing your business, or you'd like a website built 
                </p>
                
   
                <a className="support-me-link" href="https://www.serotonindesigns.com/links" target="_blank">
                    <button className="support-me-btn">View Links</button>
                </a>

                <a className="support-me-link"  href="https://discord.com/invite/raEGkkQ7gf" target="_blank">
                    <button className="support-me-btn">Discord community</button>
                </a>
                <a className="support-me-link"  href="https://form.jotform.com/220207089713149" target="_blank">
                    <button className="support-me-btn">Share your ideas</button>
                </a>
          
            </div>

            <div className="footer-privacy">
                <a className="privacy" href="" target="_blank">Privacy</a>
                <a className="privacy" href="" target="_blank">Tech Support</a>
                <a className="privacy" href="" target="_blank">Terms of Service</a>
                <a className="privacy" href="" target="_blank">All rights reserved 2022</a>
            </div>
        </div>
    )
}
