import React from 'react'
import Skilled from 'Data/Skills/Skilled'
import '../Styles/styles.css'

export default function Skills() {
    return (
        <div className='skills-wrapper'>
            <div className='skill-collection'>
                <h4 className='skill-header'>Web Development</h4>

                <div className='skill-grid-collection'>
                    {Skilled.map((skill, i) => {
                        return <img className='skill-p-img' src={skill} key={`skill-${i}`}></img>
                    })}
                </div>
            </div>
            <div className='skill-collection'>
                <h4 className='skill-header'>Video Editing</h4>

                <div className='skill-grid-collection'>

                </div>
            </div>
            <div className='skill-collection'>
                <h4 className='skill-header'>Social Media Management</h4>

                <div className='skill-grid-collection'>

                </div>
            </div>
        </div>
    )
}
