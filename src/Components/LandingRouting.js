import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/styles.css'

export default function LandingRouting() {
    return (
        <div className='landing-router'>
        
                <Link to={'/'}>
                    <div className='landing-route-box'>
                        <div className=''>

                        </div>
                        <div className='landing-route-bottom'>
                            View my links
                        </div>
                    </div>
                </Link>
           
          
                <Link to={'/'}>
                      <div className='landing-route-box'>
                            <div className=''>
                                
                            </div>
                            <div className='landing-route-bottom'>
                                Contact Me
                            </div>
                      </div>
                </Link>
    
        </div>
    )
}
