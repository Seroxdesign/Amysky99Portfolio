import React from 'react'
import Skilled from 'Data/Skills/Skilled'
import '../Styles/styles.css'

export default function PoweredBy() {
    return (
        <div className='powered-by-wrapper'> 
            {Skilled.map((skill, i) => {
                return <img className='skill-p-img' src={skill} key={`skill-${i}`}></img>
            })}
        </div>
    )
}
