import React from 'react'

import '../Styles/styles.css'

export default function ProfileImg(props) {
    return (
        <div className='profile-img' style={{backgroundImage: `url(${props.img})`}} onClick={() => {navigator.clipboard.writeText("https://www.serotonindesigns.com")}}> 
            
        </div>
    )
}
