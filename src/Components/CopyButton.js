import React from 'react'
import '../Styles/styles.css'
export default function CopyButton() {
    return (
        <div className='copy-to-btn'>
            <img src="https://i.imgur.com/Ds3Mduc.png" className='share-btn'  onClick={() => {navigator.clipboard.writeText("https://www.serotonindesigns.com")}}></img>
        </div>
    )
}
